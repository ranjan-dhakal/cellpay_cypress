describe('', () => {
    it('', () => {
        for(let i=0; i<100; i++) { // loop for 100 times
            cy.visit('https://app.cellpay.com.np/'); // visit the page
            cy.get('#username').type("9860208955"); //for id tag # is needed
            cy.get('#password').type("208955");
            cy.get("[type='submit']").click();
            cy.reload(); // reload the page
            cy.log(`Reloaded page ${i} times.`); // print the current iteration value
          }
          
    });
});