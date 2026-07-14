import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://actuallygoodai.app',
  integrations: [
    sitemap({
      // 多语言：生成 xhtml:link 语言互链，让 Google 把 / 、/zh/ 、/ja/ 关联为同一页
      // 的三个语言版本。URL 前缀（键）→ hreflang 值（值）；默认 en 在根路径。
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
          ja: 'ja',
        },
      },
    }),
  ],
});
