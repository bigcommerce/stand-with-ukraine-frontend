/// <reference types="cypress" />

// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************

declare namespace Cypress {
  interface Chainable {
    setBaseUrl(package: 'dashboard' | 'widget'): Chainable<void>;
  }
}

Cypress.Commands.add('setBaseUrl', (package: 'dashboard' | 'widget') => {
  cy.fixture('base-url').then((baseUrl) => Cypress.config('baseUrl', baseUrl[package]));
});
