import { login } from './0_login.cy.js';


describe('Self Transfer', () => {
    it('Self Fund Transfer from wallet', () => {
        login();

        cy.get("[href='/dashboard/selfTransfer']")
            .click();

        cy.fixture('selftransfer').then((data) => {


            cy.wait(3000);
            cy.get('.ui.selection.dropdown').eq(0)
                .click();
            cy.get('.menu.transition').contains(data.bankname)
                .click();


            cy.get("[placeholder='Enter amount you want to transfer']")
                .type(data.amount)

            cy.get("[placeholder='(Optional)']")
                .type(data.comments)

            cy.get("[type='submit']")
                .click();

            cy.scrollTo(0, 0)
            cy.wait(3000)

            cy.get('#password')
                .type(data.pinnum)

            cy.get("[type='submit']")
                .click();

            cy.wait(3000)
            cy.scrollTo(0, 0)

            cy.get('.negative.message')
                .should('have.text', 'Your request could not be completed at this moment,  please try after sometime. Cellpay.')



        });
    });
    it('Self Fund Transfer from Account', () => {
        login();

        cy.get("[href='/dashboard/selfTransfer']")
            .click();
        cy.wait(3000);

        cy.get('.icon-bank')
            .click();

        cy.fixture('selftransfer').then((data) => {


            cy.wait(3000);
            cy.get('.ui.selection.dropdown').eq(0)
                .click();

            cy.get('.menu.transition')
                .contains(data.bankname)
                .click();

            cy.wait(2000);
            cy.get('.ui.selection.dropdown').eq(1)
                .click();

            cy.get('div.visible.menu.transition').should('be.visible')
                .contains(data.bankname1)
                .click();

            cy.get("[placeholder='Enter amount you want to transfer']")
                .type(data.amount)

            cy.get("[placeholder='(Optional)']")
                .type(data.comments)

            cy.scrollTo(0, 0)
            cy.wait(3000)

            cy.get("[type='submit']")
                .click();

            cy.scrollTo(0, 0)
            cy.wait(3000)

            cy.get('#password')
                .type(data.pinnum)

            cy.get("[type='submit']")
                .click();

            cy.scrollTo(0, 0)

            cy.get('.negative.message')
                .should('have.text', 'Your request could not be completed at this moment,  please try after sometime. Cellpay.')



        });
    });
});