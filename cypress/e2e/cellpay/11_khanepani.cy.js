import { login} from "./0_login.cy";

beforeEach(() => {
    login()
    cy.wait(3000)

    cy.get("[href='/dashboard/nepalWater']").eq(0)
        .click();
        
});

describe('', () => {
    it.only('', () => {
        cy.wait(3000)
        cy.get('.ui.selection.dropdown').eq(0)
            .click();
        cy.get('.menu.transition')
            .contains("BRIHAT KAHUN KHANEPANI")
            .click();
        cy.scrollTo(0,0)
        cy.get("[placeholder='Enter Customer Code']")
        .type("123432")
        cy.get("[type='submit']")
        .click();
    cy.scrollTo(0,0) 
    cy.wait(3000)

    cy.get('.has-error').should('have.text',"Internal server error, please contact admin")
    cy.wait(3000)
    });
});