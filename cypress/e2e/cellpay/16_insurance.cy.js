const { login } = require("./0_login.cy");


beforeEach(() => {
    login();
    cy.wait(3000)
    cy.get("[href='/dashboard/insurance']").eq(0)
        .click();
   });

   describe('Insurance List Test', () => {
    it.only('multiple insurance company', () => {
      cy.fixture("insurance").then((data) => {

        data.forEach((testCase) => {

          cy.get('[alt="' + testCase.alt + '"]')
            .click();
            cy.wait(2000)

        //   cy.get('.card-header')
        //     .eq(1)
        //     .should('have.text', testCase.title);
          cy.scrollTo(0, 0);
          cy.get(testCase.numberField)
            .type(testCase.number);
          cy.scrollTo(0, 0);
          
          cy.get('[type="submit"]')
            .click();
            cy.wait(3000)
          
          cy.reload();
          cy.wait(2000)

        });
      });
    });
  });