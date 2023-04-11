/// <reference types = "Cypress" />

describe('cookies', ()=> {
    beforeEach(()=>{
        cy
        .visit("https://demoapp.cellpay.com.np/")
    })
    it('Test Cookies', ()=> {
    
     cy.setCookie('_fbp','fb.2.1678871302355.1262549809')
     cy.setCookie('_ga', 'GA1.3.1132423437.1678871302')

  })
})