import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://whometopia.com',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  // 文章里的代码块是提示词（纯文字），不做语法高亮，用浅色样式
  markdown: { syntaxHighlight: false },
});
