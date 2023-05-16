import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev1.pixeleyes.de/'
  },
  viewportWidth: 1200
});
