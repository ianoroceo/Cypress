const DEFAULT_TIMEOUT = 11000;
const url = Cypress.env("URL");

export default class Page {
  open() {
    cy.visit(url);
  }

  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the screen to be visible
   *
   * @return {boolean}
   */
  waitForIsShown() {
    return cy
      .get(this.selector, { timeout: DEFAULT_TIMEOUT })
      .should("be.visible");
  }
}
