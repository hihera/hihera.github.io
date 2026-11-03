import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://whometopia.com',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
