import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://brianpedraza.com',
  trailingSlash: 'always',
  integrations: [
    icon(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});