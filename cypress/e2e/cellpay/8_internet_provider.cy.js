
import { login } from "./0_login.cy"
describe('Internet Provider Page', () => {
    it.only('worldlink', () => {
        login()
        cy.get("[alt='Internet-Providers']").click()
        //attribute is used in square brackets
        cy.wait(3000)
        cy.get("[alt='Worldlink']").click() 
        cy.wait(2000)
        cy.get("[name='customerId']").type("ranjandhakal") 
        cy.wait(2000)
        cy.get("[type='submit']").click() //8800000238


    })
})