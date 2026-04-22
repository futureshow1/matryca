// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
// GitHub Pages subpath: futureshow1.github.io/matryca/
// Gdy portal dostanie własną domenę, ustaw `site` i usuń `base`.
export default defineConfig({
  site: 'https://futureshow1.github.io',
  base: '/matryca',
  integrations: [react(), sitemap(), pagefind()],
  build: {
    format: 'directory',
  },
});
