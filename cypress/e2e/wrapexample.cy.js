const { login } = require("./0_login.cy");


describe('My Cypress Test Suite', () => {
    const testCases = [    
        { title: 'CellPay', url: 'https://app.cellpay.com.np/dashboard/governmentPayment' }
     ]
  
    it.only('should navigate to multiple pages', () => {
      cy.wrap(testCases).each((testCase) => {
        login()
        cy.wait(3000)
        cy.visit(testCase.url)
        cy.title().should('contain', testCase.title)
        cy.title().then(title => {
            console.log(title)
          }) // to print the title of the page into the console
        
      })
    })
  })
  