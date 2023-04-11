import { login } from './0_login.cy'

beforeEach(() => {
    login();
    

    
    
    cy.get("[href='/dashboard/topup']").eq(0).click();
    cy.wait(3000)

    cy.get("[placeholder='Enter mobile number you want to topup']")
        .type("9860208955")
    cy.get("[placeholder='Enter amount you want to topup']")
        .type("300")
    cy.get("[placeholder='Enter Comments (Optional)']")
        .type("this is test")
})

describe("TOP UP", () => {

    it("From WALLET", () => {
        cy.get("[type='submit']")
            .click()
        cy.scrollTo(0,0)
        cy.wait(3000)
    })
    it.only("from ACCOUNT", ()=>{
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
        cy.wait(3000);
        cy.get("[placeholder='Please Enter your PIN.']")
            .type("208955")
        cy.get("[type='submit']")
            .click()
        cy.scrollTo(0,0)
    })
})