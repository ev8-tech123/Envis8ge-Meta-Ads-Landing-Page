// @ts-check
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Served at https://envis8ge.com/leadgen by the envis8ge-leadgen Worker (see wrangler.jsonc).
// Worker static assets are looked up by URL path, so the build goes into dist/leadgen/ and dist/ is the assets root.
const BASE = '/leadgen';

/** @type {import('astro').AstroIntegration} */
const leadgenAssetsRoot = {
  name: 'leadgen-assets-root',
  hooks: {
    // Clear the whole assets root so files from an older root-level build can never be uploaded.
    'astro:build:start': () => rmSync('dist', { recursive: true, force: true }),
    // Wrangler only reads .assetsignore from the assets root: move it up from dist/leadgen/ and prefix its entries.
    'astro:build:done': ({ dir }) => {
      const nested = new URL('.assetsignore', dir);
      const lines = readFileSync(nested, 'utf8')
        .split('\n')
        .map((line) => (line.trim() && !line.startsWith('#') ? `${BASE.slice(1)}/${line}` : line));
      writeFileSync(new URL('../.assetsignore', dir), lines.join('\n'));
      rmSync(nested);
    },
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://envis8ge.com',
  base: BASE,
  trailingSlash: 'never',
  outDir: `./dist${BASE}`,
  integrations: [leadgenAssetsRoot],
  vite: {
    plugins: [tailwindcss()]
  }
});
