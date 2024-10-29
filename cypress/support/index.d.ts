declare namespace Cypress {
    interface Chainable<Subject = any> {
      openHomePage(): Chainable<any>;
    }
  }