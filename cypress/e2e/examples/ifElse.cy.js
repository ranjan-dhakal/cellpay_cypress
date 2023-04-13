import { login } from "../cellpay/0_login.cy";
describe('', () => {
    it.only('', () => {
        login();
        cy.url().then(url => {
            
            if (url.includes('https://aapp.cellpay.com.np/dashboard/profile')) {
                
              cy.log('The desired URL is present, proceeding with the test...');
              // add your test steps here
              cy.get("[href='/dashboard/share']").eq(0)
                .click();

            } else {

              cy.log('The desired URL is missing, please try again later');
              if (url.includes(url)) {
                cy.log(url);
                // add additional test steps here
              }

            }
          });
          
    });
});