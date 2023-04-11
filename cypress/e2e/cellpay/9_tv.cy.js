const { login } = require("./0_login.cy");


beforeEach(() => {
    login();

    cy.wait(3000)

    cy.get("[href='/dashboard/tv']").eq(0)
        .click();
   
});

describe('TV', () => {
    it.only('From WALLET', () => {
        
    });
});