// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Update this to your production domain once it is live on Netlify.
  // It is used to generate canonical URLs and the sitemap.
  site: 'https://theattachedesk.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
