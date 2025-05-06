module.exports = {
  'projectId': '4b7344',
  e2e: {
    setupNodeEvents(on, config) {
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
}
