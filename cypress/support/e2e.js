// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// load and register the grep feature using "require" function
// https://github.com/cypress-io/cypress/tree/develop/npm/grep
const registerCypressGrep = require("@cypress/grep");
registerCypressGrep();

/* eslint mocha/no-top-level-hooks: "off" -- Top level hooks apply to all tests cases. */

beforeEach(function () {
  // DEBUG
  cy.log(
    `testConfig: ${JSON.stringify(this.currentTest._testConfig)}`,
    this.currentTest._testConfig,
  );

  if (this.currentTest._testConfig.unverifiedTestConfig.reset == false) {
    cy.log("Skipping cy.reset() due to custom test config");
  } else {
    // Call some custom command to perform environment reset
  }

  if (this.currentTest._testConfig.unverifiedTestConfig.seed == false) {
    cy.log("Skipping cy.seedData() due to custom test config");
  } else {
    // Call some custom command to perform environment seeding
  }
});

afterEach(function () {
  // pass
});

Cypress.on("uncaught:exception", () => {
  // pass
});

Cypress.on("window:before:load", (win) => {
  cy.stub(win.console, "error").callsFake(() => {
    // pass
  });
});
