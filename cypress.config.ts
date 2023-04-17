import { defineConfig } from "cypress";





export default defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    "baseUrl": "http://localhost:4200",
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Star Wars Search Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});


