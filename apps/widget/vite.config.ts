import preact from '@preact/preset-vite';
import istanbul from 'vite-plugin-istanbul';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      extension: ['.ts', '.tsx'],
      requireEnv: true,
      cypress: true,
    }),
  ],
  base: '/widget/',
  server: {
    proxy: {
      '/api': 'http://localhost:9000',
    },
    host: true,
    port: 3001,
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
    sourcemap: true,
  },
  clearScreen: false,
});
