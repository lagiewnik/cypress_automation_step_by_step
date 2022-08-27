import { defineConfig } from 'cypress'

export default defineConfig({
  watchForFileChanges: false,
  defaultCommandTimeout: 7500,
  failOnStatusCode: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
