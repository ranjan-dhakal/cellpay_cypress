const { login } = require("./0_login.cy");


beforeEach(() => {
    login();

    cy.wait(3000)

    cy.get("[href='/dashboard/nea']").eq(0)
        .click();
   
});

describe('Electricity Payment', () => {
    it('NEA', () => {
        cy.get("[alt='Nea']")
            .click()
        cy.scrollTo(0,0)
        cy.wait(3000)
        cy.get('.ui.selection.dropdown').eq(0)
            .click();
        cy.get('.menu.transition')
            .contains("ACHHAM DC")
            .click();
        cy.scrollTo(0,0)
        
        cy.get("[placeholder='Enter your SC Number']")
            .type("123432")
        cy.get("[placeholder='Please Enter your Customer ID']")
            .type("123432")
        cy.wait(3000);
        cy.get("[type='submit']")
            .click();
        cy.scrollTo(0,0)
        cy.wait(3000)

        cy.get('.has-error').should('have.text',"Record Not Found. Please recheck the Consumer details and try again.")
        cy.wait(3000)
    });

    it.only('SLREC', () => {
        cy.get("[alt='Slrec']")
            .click()
        cy.scrollTo(0,0)
        cy.wait(3000)
        cy.get("[placeholder='Please Enter your Customer ID']")
            .type("123432")
        
        cy.get("[type='submit']")
            .click();
        cy.scrollTo(0,0)
        
        cy.get('.has-error').should('have.text',"Your request could not be completed at this moment, please try after sometime.")
        cy.wait(3000)
    });
});