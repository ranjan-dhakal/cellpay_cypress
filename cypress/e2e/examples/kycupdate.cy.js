import { login } from "./0_login.cy"



describe('Update KYC', ()=>{
    it('KYC TEST', ()=>{
        login()
        cy.get('.navbar-account-btn').click()
        cy.get('.dropdown-menu-right').contains('Update KYC').click()
    })
} )