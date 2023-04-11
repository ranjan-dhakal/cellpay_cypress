import { login } from './0_login.cy.js';


describe('Fund Transfer', () => {
    it('Mobile Number', () => {
        login();
        cy.get("[href='/dashboard/fundTransfer']").click();
        cy.fixture('fundtransfer').then((data) => {


            cy.wait(3000);
            cy.get("[placeholder='Enter Mobile Number ']").type(data.mobile)

            cy.get("[placeholder='Enter amount you want to transfer']").type(data.amount)

            cy.get("[placeholder='(Optional)']").type(data.comments)

            cy.get("[type='submit']").click();
            cy.scrollTo(0, 0)
            cy.wait(3000)
        });
    });
    it('Account Number', () => {
        login();
        cy.get("[href='/dashboard/fundTransfer']").click();
        cy.wait(3000);
        cy.get("[type='radio']").eq(1).click()
        cy.wait(3000);
        cy.fixture("fundtransfer").then((data) => {

            cy.get('.ui.selection.dropdown').eq(0).click();
            cy.get('.menu.transition').contains(data.bankname).click();
            cy.get("[placeholder='Enter account name']").type(data.accountname)
            cy.get("[placeholder='Enter account number']").type(data.accountnumber)
            cy.get("[placeholder='Enter amount to send']").type(data.amount)
            cy.get("[placeholder='(Optional)']").type(data.comments)
            cy.get("[type='submit']").click();
            cy.wait(2000);
            cy.get('.negative.message').should('have.text', 'Beneficiary account validation not enabled for this bank. Transaction once sent is irreversible, please reconfirm.')




        })
    })

});
