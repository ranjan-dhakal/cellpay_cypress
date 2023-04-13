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
        { title: '  Prabhu Capital  ', alt: 'PrabhuCapital', clientField:`[name='clientID']`,clientId:"2345617385", nameField:`[name='fullName']`,fullName:"Ranjan Dhakal", mobileField: `[name='mobileNumber']`, mobileNo:"9860208955"},
        { title: '  Laxmi Capital  ', alt: 'LaxmiCapital', clientField:`[name='clientID']` ,clientId:"23456173", nameField:`[name='fullName']`, fullName:"Ranjan Dhakal", mobileField: `[name='mobileNumber']`, mobileNo:"9860208955"},
        { title: '  Civil Capital  ', alt: 'CivilCapital', clientField:`[name='clientID']` ,clientId:"45617385", nameField:`[name='fullName']`, fullName:"Ranjan Dhakal", mobileField: `[name='mobileNumber']`, mobileNo:"9860208955"}

    ]
    //subscribe json file for wrap
    const subsSystem = [
        { title: 'Laxmi Capital', alt: 'LaxmiCapital', }
    ]

    it.only('Renew', () => {
       
        //wrapping starts from here
        cy.wrap(renewSystem).each((renew) => {
            cy.get('[alt="Renew"]')
            .click()
            cy.wait(2000);

            cy.get(`[alt="${renew.alt}"]`)
                .click()
            cy.get('.card-header')
                .eq(1)
                .should('have.text', renew.title)
            cy.scrollTo(0, 0)
            cy.wait(2000);
            cy.get(renew.clientField)
                .type(renew.clientId)
            cy.get(renew.nameField)
                .type(renew.fullName)
            cy.get(renew.mobileField)
                .type(renew.mobileNo)
            cy.get("[type='submit']")
                .click();
          
            cy.wait(2000)
            // cy.get('.has-error').should('have.text',"Service not available or does not exist, please contact support.")
            // cy.wait(3000)
            cy.reload()
            cy.wait(3000)

            
        })
    });

    it.only('Subscribe', () => {
        cy.get('[alt="Subscribe"]')
            .click()
        //wrapping starts from here
        cy.wrap(subsSystem).each((subs) => {
            cy.get(`[alt="${subs.alt}"]`)
                .click()
        })
       
    });
});