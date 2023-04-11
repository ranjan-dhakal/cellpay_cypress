/// <reference types = "Cypress" />

describe('cookies', ()=> {
    
    it('Test Cookies', ()=> {
        cy
        .visit("https://demoapp.cellpay.com.np/");

        cy.request({
            method: "POST",
            url: 'https://test.cellpay.com.np/rest/access/login',
            body:{
                username:'9860876238 ',
                password:'123456'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    })
});
