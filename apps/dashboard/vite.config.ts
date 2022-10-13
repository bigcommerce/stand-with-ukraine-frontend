import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import { defineConfig } from 'vite';
import svgLoader from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      extension: ['.ts', '.tsx'],
      requireEnv: true,
      cypress: true,
    }),
  ],
  base: '/dashboard/',
  server: {
    proxy: {
      '/api': 'http://localhost:9000',
    },
    host: true,
    port: 3001,
  },
  build: {
    outDir: '../../build/dashboard',
    emptyOutDir: true,
    sourcemap: true,
  },
  clearScreen: false,
});
