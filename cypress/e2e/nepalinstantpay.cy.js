import { login } from "./0_login.cy"



export function confirm(){
    
    }
export function npi_form(){
    cy.get("[alt='nepal-pay-instant']").click()//attribute is used in square brackets
        
        cy.wait(3000);
        
        // Get the dropdown element
        const dropdown = cy.get('.ui.selection.dropdown').eq(0);
         
        // Click the dropdown to show the options
        dropdown.click();

        // Get the option with the value "Network Banks" and click it
        cy.get('.menu.transition').contains('PSP/Wallet').click();

        cy.wait(2000); //wait for 2 seconds
        cy.get('.ui.selection.dropdown').eq(1).click();

        // Get the option with the value "Network Banks" and click it
        cy.get('.menu.transition').contains('Prabhu Pay').click();

        cy.get("[name='mobileNumber']").type("9813979589")
        cy.get("[name='amount']").type("2500")

        
}
describe('nepalinstantpay', () => {
    it('Verify NPI Wallet Test', () => {
        login()
        npi_form()
        
        cy.get("[name='description']").type("test")
        cy.get("[type='submit']").click();
        cy.scrollTo(0, 0) //scroll to top
        cy.wait(5000)
        if (cy.get('.r > .text-center').should('contain',"Confirm Payment") == true) {
            confirm()
        } else {
            cy.get('.r > .text-center').should('contain',"Confirm Payment").end()
        }
        
       
        
    })
    it('NPI Account', () => {
        login()

        npi_form()
        cy.get('.media-middle.media-body').contains('Account').click();
        // Get the dropdown element
        cy.get('.ui.selection.dropdown').eq(2).click();

        // Get the option with the value "Network Banks" and click it
        cy.get('.menu.transition').contains('Nepal Investment Mega Bank Limited').click();

        cy.get("[name='description']").type("test")
        cy.get("[type='submit']").click();
        
        cy.scrollTo(0, 0) //scroll to top
        cy.wait(5000);
        confirm()
        
    })

})