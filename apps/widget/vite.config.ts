import * as path from 'path';
import { defineConfig } from 'vite';

import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: '/widget/',
  server: {
    proxy: {
      '/api': 'http://localhost:9000',
    },
  },
  build: {
    lib: {
      formats: ['umd'],
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'widget',
      fileName: () => `index.js`,
    },
    outDir: '../../build/widget',
    emptyOutDir: true,
  },
});
