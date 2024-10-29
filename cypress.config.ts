const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  e2e: {
    baseUrl: "http://uitestingplayground.com/home",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
