# 内容配置指南 (Content Configuration Guide)

本指南详细说明了如何配置网站各模块的内容，包括 JSON 配置和 Markdown 文件，以及如何实现中英文切换。

---

## 📁 项目文件结构

```text
hera/
├── index.html                    # 网站入口文件 (核心代码)
├── server.js                     # 本地预览服务器
├── CONTENT_GUIDE.md              # 内容配置指南 (本文档)
├── DEPLOY.md                     # 部署指南
│
├── assets/                       # 静态资源目录
│   ├── projects/                 # 项目实验室图片
│   ├── races/                    # 离线模式图片
│   ├── logo/                     # Logo 图标
│   └── wechat/                   # 微信相关图片
│
└── data/                         # 动态内容配置目录
    ├── index.json                # 内容索引文件 (需手动更新)
    ├── status.json               # 首页状态更新
    ├── archives.json             # 归档列表
    ├── resume.json               # 成长轨迹 - 工作经历
    ├── projects.json             # ⭐ 项目实验室 (中文)
    ├── races.json                # ⭐ 离线模式 (中文)
    │
    ├── en/                       # ⭐ 英文配置目录
    │   ├── projects.json         # 项目实验室 (英文)
    │   └── races.json            # 离线模式 (英文)
    │
    ├── posts/                    # 深度思考 - 博客文章 (Markdown)
    │   ├── 2024-12-20-ai-agent.md
    │   ├── 2024-11-15-ai-pm-guide.md
    │   └── 2024-10-20-douyin-guide.md
    │
    └── inputs/                   # 第二大脑 - 推荐资源
        ├── zh/                   # ⭐ 中文配置 (JSON)
        │   ├── creators.json     # 博主/视频推荐
        │   ├── books.json        # 书籍推荐
        │   └── tools.json        # 工具/网站推荐
        ├── en/                   # ⭐ 英文配置 (JSON)
        │   ├── creators.json     # Bloggers & Channels
        │   ├── books.json        # Book Recommendations
        │   └── tools.json        # Tools & Websites
        ├── books/                # (旧结构, Markdown)
        ├── movies/
        ├── podcasts/
        └── videos/
```

---

## 🌐 中英文切换配置说明

网站支持中英文切换，配置方式如下：

### 方式一：在 `index.html` 中配置 (当前方式)

目前网站的中英文内容主要在 `index.html` 的 `DEFAULT_CONTENT` 对象中配置：

```javascript
const DEFAULT_CONTENT = {
    zh: {
        // 中文内容
        resume: { ... },
        projects: { ... },
        run: { ... },
        blog: { ... },
        inputs: { ... }
    },
    en: {
        // 英文内容 (结构与中文相同)
        resume: { ... },
        projects: { ... },
        run: { ... },
        blog: { ... },
        inputs: { ... }
    }
};
```

### 方式二：使用 JSON 配置文件 (推荐扩展方式)

若要将内容完全分离到配置文件，可创建以下结构：

```text
data/
├── zh/                           # 中文内容
│   ├── resume.json
│   ├── projects.json
│   ├── races.json
│   └── inputs.json
│
└── en/                           # 英文内容
    ├── resume.json
    ├── projects.json
    ├── races.json
    └── inputs.json
```

然后修改 `useDataFetcher` 钩子，根据当前语言加载对应目录的文件。

---

## 📋 各模块配置详解

### 1. 成长轨迹 (Resume / Career Timeline)

**配置位置**：`data/resume.json` 或 `index.html` 中的 `DEFAULT_CONTENT.zh.resume` / `DEFAULT_CONTENT.en.resume`

**JSON 格式示例**：

```json
{
  "jobs": [
    {
      "role": "AI 产品总监",
      "company": "某科技公司",
      "period": "2022 - 至今",
      "desc": "负责 AI 产品战略规划与落地...",
      "tags": ["AI", "Product Strategy", "Team Lead"]
    },
    {
      "role": "高级产品经理",
      "company": "互联网大厂",
      "period": "2019 - 2022",
      "desc": "主导多款 ToB 产品从 0 到 1...",
      "tags": ["B2B", "SaaS", "Growth"]
    }
  ]
}
```

**英文版本** (`data/en/resume.json` 或 `DEFAULT_CONTENT.en.resume`)：

```json
{
  "jobs": [
    {
      "role": "AI Product Director",
      "company": "Tech Company",
      "period": "2022 - Present",
      "desc": "Leading AI product strategy and implementation...",
      "tags": ["AI", "Product Strategy", "Team Lead"]
    }
  ]
}
```

---

### 2. 离线模式 (Offline Mode / Races) ⭐ 支持中英文配置文件

**配置位置**：
- 中文：`data/races.json`
- 英文：`data/en/races.json`

**图片位置**：`assets/races/`

**JSON 格式示例**：

```json
{
  "races": [
    {
      "id": "race-01",
      "title": "70KM 亚沙赛",
      "category": "Ultra Marathon",
      "date": "2024.05",
      "result": "完赛",
      "image_placeholder": "assets/races/yasha-start.jpg",
      "images": ["assets/races/yasha-start.jpg", "assets/races/yasha-camp.jpg"],
      "image_placeholder": "🏜️",
      "desc": "穿越敦煌戈壁，三天两夜的极限挑战...",
      "tags": ["戈壁", "超马", "团队"]
    },
    {
      "id": "race-02",
      "title": "四姑娘山登山",
      "category": "Mountaineering",
      "date": "2023.10",
      "result": "海拔 5276米",
      "image_placeholder": "assets/races/siguniang-mountain.jpg",
      "images": ["assets/races/siguniang-mountain.jpg", "assets/races/siguniang-trail.jpg"],
      "image_placeholder": "⛰️",
      "desc": "人生第一座雪山，大峰登顶...",
      "tags": ["雪山", "登山", "高海拔"]
    }
  ]
}
```

**英文版本** (`data/en/races.json`)：

```json
{
  "races": [
    {
      "id": "race-01",
      "title": "70KM Gobi Challenge",
      "category": "Ultra Marathon",
      "date": "2024.05",
      "result": "Finished",
      "image_placeholder": "assets/races/yasha-start.jpg",
      "images": ["assets/races/yasha-start.jpg", "assets/races/yasha-camp.jpg"],
      "desc": "A 3-day ultra marathon crossing the Gobi Desert...",
      "tags": ["Desert", "Ultra", "Team"]
    }
  ]
}
```

**重要**：中英文配置文件的 `id`、`images` 字段必须保持一致，只翻译文字内容。

**图片配置说明**：
- 将图片放入 `assets/races/` 目录
- 在 JSON 中使用相对路径：`"image_placeholder": "assets/races/filename.jpg"`
- `images` 数组支持多张图片切换
- 支持 JPG、PNG、WebP 格式
- 建议图片尺寸：800x600px 或 16:9 比例

---

### 3. 项目实验室 (Project Lab) ⭐ 支持中英文配置文件

**配置位置**：
- 中文：`data/projects.json`
- 英文：`data/en/projects.json`

**图片位置**：`assets/projects/`

**JSON 格式示例**：

```json
{
  "list": [
    {
      "id": "proj-01",
      "title": "AI 养老陪伴机器人",
      "role": "Product Lead",
      "image": "assets/projects/robot.jpg",
      "image_text": "🤖",
      "desc": "基于大模型的适老化智能陪伴产品，已落地多家养老机构...",
      "tech": ["LLM", "Voice AI", "IoT"],
      "link": "https://example.com/project"
    },
    {
      "id": "proj-02",
      "title": "个人知识管理系统",
      "role": "Full Stack",
      "image": "assets/projects/pkm.jpg",
      "image_text": "📚",
      "desc": "基于 Notion API 的自动化知识整理工具...",
      "tech": ["React", "Node.js", "Notion API"],
      "link": "#"
    }
  ]
}
```

**英文版本** (`data/en/projects.json`)：

```json
{
  "list": [
    {
      "id": "proj-01",
      "title": "AI Elderly Care Robot",
      "role": "Product Lead",
      "image": "assets/projects/robot.jpg",
      "image_text": "🤖",
      "desc": "An LLM-powered companion robot for elderly care facilities...",
      "tech": ["LLM", "Voice AI", "IoT"],
      "link": "https://example.com/project"
    }
  ]
}
```

**重要**：中英文配置文件的 `id`、`image` 字段必须保持一致，只翻译文字内容。

**图片配置说明**：
- 将图片放入 `assets/projects/` 目录
- 使用相对路径：`"image": "assets/projects/filename.jpg"`
- `image_text` 作为备用显示（无图片时）

---

### 4. 深度思考 (Blog Posts)

**配置位置**：`data/posts/` 目录下的 Markdown 文件

**索引文件**：`data/index.json` 的 `posts` 数组

**文件命名规范**：`YYYY-MM-DD-slug.md`，例如 `2024-12-20-ai-agent.md`

**Markdown Front Matter 格式**：

```markdown
---
id: 1
title: "产品经理如何通过 AI Agent 提升效率？"
date: "2024-12-20"
category: "AI 落地"
tags: ["Agent", "Productivity", "AI"]
summary: "探讨 AI Agent 在实际工作中的应用场景..."
cover_image: "assets/images/posts/ai-agent-cover.jpg"
---

这里是文章正文，支持标准 Markdown 语法。

## 二级标题

### 三级标题

- 列表项
- 另一个列表项

> 引用块

**粗体** 和 *斜体*

[链接文字](https://example.com)

![图片描述](assets/images/posts/example.jpg)
```

**添加新文章步骤**：
1. 在 `data/posts/` 创建新的 `.md` 文件
2. 编辑 `data/index.json`，在 `posts` 数组中添加文件名：

```json
{
  "posts": [
    "2024-12-20-ai-agent.md",
    "2024-11-15-ai-pm-guide.md",
    "2024-10-20-douyin-guide.md",
    "2025-01-05-new-article.md"  // 新增
  ]
}
```

**中英文支持**：
- 目前文章内容中英文共用同一文件
- 如需完全独立的中英文文章，可创建 `data/posts/zh/` 和 `data/posts/en/` 子目录

---

### 5. 第二大脑 (Second Brain / Inputs) ⭐ 支持配置文件

**配置位置**：`data/inputs/zh/` 和 `data/inputs/en/` 目录下的 JSON 配置文件

第二大脑支持通过独立的 JSON 配置文件管理内容，自动实现中英文切换。

#### 目录结构

```text
data/inputs/
├── zh/                           # 中文配置
│   ├── creators.json             # 博主/视频推荐
│   ├── books.json                # 书籍推荐
│   └── tools.json                # 工具/网站推荐
│
└── en/                           # 英文配置
    ├── creators.json             # Bloggers & Channels
    ├── books.json                # Book Recommendations
    └── tools.json                # Tools & Websites
```

#### 5.1 博主/视频推荐 (creators.json)

**文件位置**：`data/inputs/zh/creators.json` 和 `data/inputs/en/creators.json`

**JSON 格式**：

```json
{
  "ai_tech": [
    {
      "name": "Andrej Karpathy",
      "desc": "OpenAI 创始成员，前 Tesla AI 总监。LLM 入门必看神作。",
      "tags": ["AI", "Code", "LLM"],
      "link": "https://www.youtube.com/@AndrejKarpathy"
    },
    {
      "name": "跟李沐学AI",
      "desc": "亚马逊首席科学家，中文世界最好的深度学习课程。",
      "tags": ["Deep Learning", "Course"],
      "link": "https://www.youtube.com/@mu_li"
    }
  ],
  "business": [
    {
      "name": "Lenny's Podcast",
      "desc": "产品经理圣经。全球顶级 PM 与增长专家的深度访谈。",
      "tags": ["Product", "Growth", "SaaS"],
      "link": "https://www.youtube.com/@LennysPodcast"
    }
  ],
  "english": [
    {
      "name": "Luke's ENGLISH Podcast",
      "desc": "强烈推荐。由英国老师 Luke 主持，幽默、地道、深度。",
      "tags": ["British", "Fun", "Podcast"],
      "link": "https://www.youtube.com/@LukesEnglishPodcast"
    }
  ],
  "culture": [
    {
      "name": "Lex Fridman",
      "desc": "硬核访谈。对话全球顶尖科学家、思想家。",
      "tags": ["Deep Dive", "Philosophy"],
      "link": "https://www.youtube.com/@lexfridman"
    }
  ]
}
```

**字段说明**：
| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | ✅ | 博主/频道名称 |
| desc | string | ✅ | 简短描述 (建议 50 字以内) |
| tags | array | ✅ | 标签列表 (建议 2-3 个) |
| link | string | ✅ | 外部链接 (YouTube、播客等) |

#### 5.2 书籍推荐 (books.json)

**文件位置**：`data/inputs/zh/books.json` 和 `data/inputs/en/books.json`

**JSON 格式**：

```json
[
  {
    "name": "纳瓦尔宝典",
    "desc": "硅谷知名投资人 Naval 关于财富与幸福的智慧语录，字字珠玑。",
    "tags": ["Wisdom", "Wealth", "Life"],
    "link": "#"
  },
  {
    "name": "原子习惯",
    "desc": "改变习惯的实操指南，教你通过细微的改变获得巨大的复利效应。",
    "tags": ["Growth", "Habits"],
    "link": "#"
  }
]
```

**字段说明**：
| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | ✅ | 书名 |
| desc | string | ✅ | 书评/推荐理由 |
| tags | array | ✅ | 标签列表 |
| link | string | ❌ | 购买/阅读链接 (无链接填 `"#"`) |

#### 5.3 工具/网站推荐 (tools.json)

**文件位置**：`data/inputs/zh/tools.json` 和 `data/inputs/en/tools.json`

**JSON 格式**：

```json
[
  {
    "name": "ChatGPT",
    "desc": "OpenAI 出品的里程碑式 LLM，日常问答、代码辅助、创意写作首选。",
    "tags": ["AI", "LLM"],
    "link": "https://chat.openai.com/"
  },
  {
    "name": "Notion",
    "desc": "All-in-one 笔记与知识库工具，构建第二大脑的核心系统。",
    "tags": ["PKM", "Notes"],
    "link": "https://www.notion.so/"
  }
]
```

**字段说明**：
| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | ✅ | 工具/网站名称 |
| desc | string | ✅ | 功能描述 |
| tags | array | ✅ | 标签列表 |
| link | string | ✅ | 访问链接 |

#### 5.4 中英文切换

网站会根据当前语言自动加载对应目录的配置文件：

- **中文模式**：加载 `data/inputs/zh/*.json`
- **英文模式**：加载 `data/inputs/en/*.json`

**重要**：中英文配置文件的**结构必须相同**，只有文字内容不同。

**示例**：

中文版 (`data/inputs/zh/books.json`)：
```json
[{ "name": "原子习惯", "desc": "改变习惯的实操指南...", "tags": ["Growth"], "link": "#" }]
```

英文版 (`data/inputs/en/books.json`)：
```json
[{ "name": "Atomic Habits", "desc": "Practical guide to habit change...", "tags": ["Growth"], "link": "#" }]
```

#### 5.5 更新第二大脑内容

1. 编辑对应的 JSON 文件（中文在 `zh/`，英文在 `en/`）
2. 本地预览：`node server.js`
3. 提交推送：

```bash
git add data/inputs/zh/*.json data/inputs/en/*.json
git commit -m "Update: Second Brain recommendations"
git push
```

---

## 🖼️ 图片配置汇总

| 模块 | 图片存放目录 | 路径格式示例 |
|------|-------------|-------------|
| 项目实验室 | `assets/projects/` | `assets/projects/robot.jpg` |
| 离线模式 | `assets/races/` | `assets/races/yasha-start.jpg` |
| 博客文章 | `assets/images/posts/` | `assets/images/posts/cover.jpg` |
| Logo | `assets/logo/` | `assets/logo/avatar.png` |
| 微信 | `assets/wechat/` | `assets/wechat/qrcode.png` |

**图片规范**：
- 格式：JPG、PNG、WebP
- 封面/缩略图建议尺寸：800x600px 或 16:9 比例
- 头像/Logo 建议尺寸：200x200px
- 文件名使用小写英文，用连字符分隔：`my-project-cover.jpg`

---

## 📝 data/index.json 配置

这是内容索引文件，用于告诉网站需要加载哪些 Markdown 文件：

```json
{
  "posts": [
    "2024-12-20-ai-agent.md",
    "2024-11-15-ai-pm-guide.md",
    "2024-10-20-douyin-guide.md"
  ],
  "inputs": {
    "books": [],
    "movies": [],
    "podcasts": [],
    "videos": []
  }
}
```

**重要**：每次添加新的 Markdown 文件后，需要手动更新此文件。

---

## 🔄 内容更新流程

1. **修改配置文件**：编辑对应的 JSON 或 Markdown 文件
2. **更新索引**（如适用）：编辑 `data/index.json`
3. **本地预览**：运行 `node server.js`，访问 `http://localhost:3001` 检查效果
4. **提交推送**：
   ```bash
   git add .
   git commit -m "Update: 添加新文章/更新内容"
   git push
   ```
5. **等待部署**：GitHub Pages 会自动更新（通常 1-2 分钟）

---

## ❓ 常见问题

### Q: 为什么我添加的图片不显示？
A: 检查以下几点：
- 图片文件是否已放入正确的目录
- 路径是否正确（使用相对路径，如 `assets/images/...`）
- 文件名大小写是否匹配（Git 对大小写敏感）

### Q: 为什么新文章没有出现？
A: 确保已将文件名添加到 `data/index.json` 的 `posts` 数组中。

### Q: 如何添加纯英文内容？
A: 在 `index.html` 的 `DEFAULT_CONTENT.en` 对象中添加对应内容，保持与中文版相同的数据结构。

### Q: 标签(Tags)支持中文吗？
A: 支持，但建议使用英文以保持一致性和更好的视觉效果。
