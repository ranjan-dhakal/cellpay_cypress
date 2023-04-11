import { login } from './0_login.cy'

beforeEach(() => {
    login();
    


    cy.wait(3000)
    cy.get("[href='/dashboard/landline']").eq(0).click();


    cy.get('.insuranceTitle').eq(0).click();
    cy.wait(3000)
    cy.get("[name='mobileNumber']")
        .type("14156666")
    cy.get("[name='amount']")
        .type("666")
})

describe("Landline", () => {

    it.only("From WALLET", () => {
        cy.get("[type='submit']")
            .click()
        cy.scrollTo(0,0)
        cy.wait(3000)
        cy.get('.has-error').should("have.text", 'Not enough funds')
    })
    it.only("From ACCOUNT", () => {
        cy.scrollTo(0,0)
        cy.get('.icon-bank')
            .click();
        cy.scrollTo(0,0)
        cy.get('.ui.selection.dropdown').eq(0)
            .click();
       
        
        cy.get('.menu.transition')
            .contains("NIC ASIA Bank Limited")
            .click();
        cy.wait(3000);
        cy.get("[type='submit']")
            .click();
        cy.scrollTo(0,0)
    })
    
})