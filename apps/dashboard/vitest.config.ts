import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        provider: 'istanbul',
        reporter: ['lcov', 'json', 'json-summary'],
      },
      environment: 'jsdom',
      setupFiles: ['src/testSetup.ts'],
    },
  }),
);
