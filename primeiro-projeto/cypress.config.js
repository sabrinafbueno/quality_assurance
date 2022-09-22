const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yp45op',
  reporter:'mochawesome',
  reporterOptions: {
    reportDir: 'Cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://alura-fotos.herokuapp.com"
    
  },

  
});
