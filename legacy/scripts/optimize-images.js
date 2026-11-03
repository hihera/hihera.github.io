/**
 * 图片优化脚本 — 将 assets/ 下所有 JPG/PNG 转为 WebP
 *
 * 使用方式:
 *   npm install sharp
 *   node scripts/optimize-images.js            # 只处理新增/修改的图片
 *   node scripts/optimize-images.js --force    # 强制重新处理全部
 *
 * 策略:
 *   - 照片 (races/):    WebP quality 80, 最大宽度 1200px
 *   - 项目截图 (projects/): WebP quality 85, 最大宽度 1600px
 *   - Logo:             WebP quality 90, 保持原尺寸
 *   - 头像:             WebP quality 85, 最大宽度 400px
 *   - 其他:             WebP quality 82, 最大宽度 1600px
 *
 * 原图不会被删除，WebP 文件生成在同目录下。
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// ── 配置 ──────────────────────────────────────────────
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

// 按目录匹配规则 (从上到下，命中第一个即停止)
const RULES = [
  {
    name: '越野/户外照片',
    match: (filePath) => filePath.includes('races'),
    options: { quality: 80, width: 1200, withoutEnlargement: true },
  },
  {
    name: '项目截图',
    match: (filePath) => filePath.includes('projects'),
    options: { quality: 85, width: 1600, withoutEnlargement: true },
  },
  {
    name: '产品截图',
    match: (filePath) => /\d{8}-\d{6}/.test(path.basename(filePath)),
    options: { quality: 85, width: 1600, withoutEnlargement: true },
  },
  {
    name: 'Logo',
    match: (filePath) => filePath.includes('logo'),
    options: { quality: 90, width: null }, // 保持原尺寸
  },
  {
    name: '头像',
    match: (filePath) => filePath.includes('avatar'),
    options: { quality: 85, width: 400, withoutEnlargement: true },
  },
];

const DEFAULT_OPTIONS = { quality: 82, width: 1600, withoutEnlargement: true };

// ── 工具函数 ──────────────────────────────────────────
function findImages(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findImages(fullPath));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }
  return results;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

function getRule(filePath) {
  return RULES.find((r) => r.match(filePath)) || null;
}

// ── 主流程 ────────────────────────────────────────────
async function optimize() {
  const images = findImages(ASSETS_DIR);
  console.log(`\n🔍 找到 ${images.length} 张图片\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let successCount = 0;
  const results = [];

  for (let i = 0; i < images.length; i++) {
    const inputPath = images[i];
    const parsed = path.parse(inputPath);
    const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
    const relPath = path.relative(path.join(ASSETS_DIR, '..'), inputPath);

    const rule = getRule(inputPath);
    const opts = rule ? rule.options : DEFAULT_OPTIONS;
    const label = rule ? rule.name : '默认';

    const originalSize = fs.statSync(inputPath).size;

    // 如果 webp 已存在且比源文件新，跳过
    if (!process.argv.includes('--force') && fs.existsSync(outputPath)) {
      const webpStat = fs.statSync(outputPath);
      if (webpStat.mtime > fs.statSync(inputPath).mtime) {
        console.log(
          `  ⏭️  [${i + 1}/${images.length}] ${relPath.padEnd(50)} ${formatSize(originalSize).padStart(8)} → 已优化 (跳过)`
        );
        continue;
      }
    }

    try {
      let pipeline = sharp(inputPath);

      // 读取元数据判断是否需要缩放
      const metadata = await pipeline.metadata();

      if (opts.width && metadata.width > opts.width) {
        pipeline = pipeline.resize({ width: opts.width, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: opts.quality, effort: 6 }).toFile(outputPath);

      const optimizedSize = fs.statSync(outputPath).size;
      const pct = ((1 - optimizedSize / originalSize) * 100).toFixed(0);

      totalOriginal += originalSize;
      totalOptimized += optimizedSize;
      successCount++;

      results.push({
        file: relPath,
        label,
        original: formatSize(originalSize),
        optimized: formatSize(optimizedSize),
        pct: `${pct}%`,
      });

      console.log(
        `  ✅ [${i + 1}/${images.length}] ${relPath.padEnd(50)} ${formatSize(originalSize).padStart(8)} → ${formatSize(optimizedSize).padStart(8)}  (-${pct}%)  [${label}]`
      );
    } catch (err) {
      console.error(`  ❌ ${relPath}: ${err.message}`);
    }
  }

  // ── 汇总 ──────────────────────────────────────────
  const totalPct = ((1 - totalOptimized / totalOriginal) * 100).toFixed(0);
  console.log(`\n${'─'.repeat(80)}`);
  console.log(`  📊 总计: ${formatSize(totalOriginal)} → ${formatSize(totalOptimized)}  节省 ${totalPct}%`);
  console.log(`  ✅ 成功: ${successCount}/${images.length}`);
  console.log(`  💡 WebP 文件已生成在原图同目录下，请检查后提交\n`);
}

optimize().catch((err) => {
  console.error('脚本执行失败:', err);
  process.exit(1);
});
