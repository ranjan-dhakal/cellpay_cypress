import { login } from './0_login.cy'


beforeEach (() =>{
    login();
    cy.wait(3000);
    cy.get("[href='/dashboard/retailPay']")
        .click();


    cy.fixture("merchant").then((data) => {
        cy.wait(3000);
    
        cy.get("[name='mobileNumber']")
            .type(data.mobile)
        cy.get("[placeholder='Enter amount you want to topup']")
            .type(data.amount)
        cy.get("[placeholder='Please enter your Invoice number']")
            .type(data.invoice)
        cy.get("[placeholder='(Optional)']")
            .type(data.comment)
        

    })
})

describe ("payment merchant", () =>{ 
    
    it.only("merchant payment from WALLET",()=> {
        cy.get("[type='submit']")
        .click();
        cy.scrollTo(0,0)
        cy.wait(4000)
        cy.get('.help-block')
                .should('have.text', 'Transfer not possible')
    })
    it.only("merchant payment from ACCOUNT",()=> {
        
        
        cy.scrollTo(0,0)
        cy.get('.icon-bank')
            .click();
        cy.scrollTo(0,0)
        cy.get('.ui.selection.dropdown').eq(0)
            .click();
       
        
        cy.get('.menu.transition')
            .contains("NIC ASIA Bank Limited")
            .click();
        cy.get("[type='submit']")
            .click();
        cy.scrollTo(0,0)
        cy.wait(3000);
        cy.get('.warning').should('have.text', 'No Bank associated , Please link your accounts !')
        
    })
})