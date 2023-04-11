const { login } = require("./0_login.cy");


beforeEach(() => {
    login();

    cy.wait(3000)

    cy.get("[href='/dashboard/governmentPayment']").eq(0)
        .click();
   
});

describe('Governmemt Payment', () => {
    it.only('From WALLET', () => {
        
    });
});
