import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgLoader from 'vite-plugin-svgr';
import { ssr } from 'vike/plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader(), ssr({ prerender: true })],
  base: '/landing',
  server: {
    proxy: {
      '/api': 'http://localhost:9000',
      '/dashboard': 'http://localhost:3000',
    },
    port: 3002,
  },
  build: {
    outDir: '../../build/.landing',
    emptyOutDir: true,
    sourcemap: true,
  },
  clearScreen: false,
  ssr: {
    noExternal: ['styled-components', '@emotion/*'],
  },
  optimizeDeps: { include: ['cross-fetch', 'react/jsx-runtime'] },
});
