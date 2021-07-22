const url = Cypress.env("URL");

import navBarText from "../fixtures/navBar.json";
import primaryGridColText from "../fixtures/primaryGridCol.json";

describe("Open Homepage Test 2", () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it("Should display Nav Bar Options", () => {
    const mainNavObject = "#main-nav li";
    const navBarTextLength = navBarText.length;

    cy.get(mainNavObject).should("have.length", navBarTextLength);
    cy.get(mainNavObject).each((item, idx) => {
      /**
       * Two ways to check if each element contains text
       * (1) Convert the element to Cypress object via wrap
       * (2) use jQuery using Cypress.$
       */

      // cy.wrap(item).should("contain.text", navBarText[idx]);

      const elText = Cypress.$(item).text();
      // Note: need to trim text because it has white spaces when text is retrieved
      expect(elText.trim()).to.eq(navBarText[idx]);
    });
  });

  it("Should display Grid Primary Columns", () => {
    const primaryColObject = '[ref="agLabel"]';

    cy.get(primaryColObject)
      .then(($els) => {
        console.log(cy.$$($els));

        // Extract text from the list of found elements and use Lodash _.map method
        return Cypress._.map($els, "innerText");
      })
      .should("be.an", "array") // validates it returns as an array
      .then((text) => {
        const length = text.filter(Boolean).length;
        expect(length).to.eq(primaryGridColText.length); // validates that count from the array is same as the length of the data set
      });

    cy.get(primaryColObject).each((item, idx) => {
      const elText = Cypress.$(item).text();
      const textValue = elText.trim();

      if (textValue != "") {
        const isIncluded = primaryGridColText.some((value) =>
          textValue.includes(value)
        );
        expect(isIncluded).to.eq(true);
      } else {
        console.log(`${idx} does not have text value`);
      }
    });
  });
});
