import { login } from "./0_login.cy";

beforeEach(() => {
    login();
    cy.wait(3000)
    cy.get("[href='/dashboard/share']").eq(0)
        .click();
});


describe('Share Payment', () => {

    // renew system json file for wrap
    const renewSystem = [
        {title: 'Prabbhu Capital', alt: 'PrabhuCapital',}
    ]
    //subscribe json file for wrap
    const subsSystem = [
        {title: 'Laxmi Capital', alt: 'LaxmiCapital',}
    ]
    it.only('Renew', () => {

        cy.get('[alt="Renew"]')
            .click()

        //wrapping starts from here
        cy.wrap(renewSystem).each((renew) => {
            
            cy.get(`[alt="${renew.alt}"]`)
                .click()
        })
    });

    it.only('Subscribe', () => {
        cy.get('[alt="Subscribe"]')
            .click()
        
        //wrapping starts from here
        cy.wrap(subsSystem).each((subs) =>{
            cy.get(`[alt="${subs.alt}"]`)
                .click()
        })
    });
});