const { defineConfig } = require('cypress')
const mdPreprocessor = require('cypress-markdown-preprocessor')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', mdPreprocessor)
      return config
    },
    // use Markdown file from folder "docs" as tests
    specPattern: 'cypress/e2e/*.md',
    viewportHeight: 1000,
    viewportWidth: 1200,
  },
})