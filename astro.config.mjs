// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://matryca.org',
  integrations: [react(), sitemap(), pagefind()],
  build: {
    format: 'directory',
  },
});
