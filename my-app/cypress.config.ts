import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      coverage(on, config);
      // implement node event listeners here
      return config;
    },
    baseUrl: 'http://localhost:5173',
  },
});
