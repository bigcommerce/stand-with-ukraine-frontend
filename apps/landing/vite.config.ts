import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgLoader from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader(),
  ],
  base: '/landing/',
  server: {
    proxy: {
      '/api': 'http://localhost:9000',
    },
    host: true,
    port: 3002,
  },
  build: {
    outDir: '../../build/landing',
    emptyOutDir: true,
    sourcemap: true,
  },
  clearScreen: false,
});
