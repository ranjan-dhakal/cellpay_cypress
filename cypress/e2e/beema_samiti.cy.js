import { login } from "./0_login.cy";

describe('Internet Provider Page', () => {
  it('worldlink', () => {
    cy.fixture("bema.json").then((data) => {
      login();
      cy.get(".sidenav-label").contains('Nepal Insurance Authority').click();
      cy.wait(2000);
      cy.get("[alt='agent']").click();
      data.forEach((bemadata) => {
        
       
       
        cy.wait(2000);
        cy.get("[placeholder='Please enter your License Number']").type(bemadata.CertificateRegistrationNo);
        cy.scrollTo(0, 0)
        cy.get("[placeholder='Please enter your License Issued Date (YYYY-MM-DD)']").type(bemadata.CertificateRegisterDate);
        cy.wait(2000);
        cy.scrollTo(0, 0)

        cy.get('.ui.selection.dropdown').eq(0).click();
        cy.scrollTo(0, 0)
        cy.get('.menu.transition').contains(bemadata.Agent).click();
        cy.scrollTo(0, 0)
        cy.get('.ui.selection.dropdown').eq(1).click().contains(bemadata.Name).click();
        
        cy.scrollTo(0, 0)
        cy.wait(2000);
        cy.get("[type='submit']").click();
        cy.scrollTo(0, 0)
        cy.wait(4000);
       
        cy.reload()
        cy.wait(4000);

        cy.get("[alt='agent']").click();
        // cy.wait(4000);
        // cy.get('.navbar-account-btn').click();
        // cy.get('.dropdown-menu-right').contains('Sign out').click();

        // try {
        //     cy.get('.r>h4.text-center', { timeout: 10000 }).contains('Confirm Payment').should('be.visible');

        //   console.log('Successful');
        // } catch (error) {
        //   console.log('Failed');
        //   cy.get('.navbar-account-btn').click();
        //   cy.get('.dropdown-menu-right').contains('Sign out').click();
        // }

        
      });
    });
  });
});
