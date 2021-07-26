import Page from "./page";

class HomePage extends Page {
  /**
* define elements
/
/**
* Common sections. This need to move to specific common pageObjects
*/
  get mainNavObjects() {
    return cy.get("#main-nav li");
  }

  get primaryColObjects() {
    return cy.get('[ref="agLabel"]');
  }

  /**
   * Main Section Content
   */

  /**
   * define or overwrite page methods
   */

  open() {
    super.open();
    return this;
  }

  constructor() {
    super('[ref="eBodyViewport"]');
  }
}

export default new HomePage();
