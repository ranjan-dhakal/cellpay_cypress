const { login } = require("./0_login.cy");


describe('My Cypress Test Suite', () => {
    const testCases = [    
        { title: 'CRO', href: 'loksewa' },
        { title: 'Department Of Customs', href: 'https://app.cellpay.com.np/dashboard/governmentPayment' },
        { title: 'Government Revenue (FCGO)', href: 'https://app.cellpay.com.np/dashboard/governmentPayment' },
        { title: 'IRD', href: 'https://app.cellpay.com.np/dashboard/governmentPayment' },
        { title: 'LokSewa', href: 'https://app.cellpay.com.np/dashboard/governmentPayment' },
        { title: 'Passport', href: 'https://app.cellpay.com.np/dashboard/governmentPayment' }
     ]
  
    it.only('should navigate to multiple pages', () => {
      cy.wrap(testCases).each((testCase) => {
        login()
        cy.wait(3000)
        cy.get("[alt=testCase.href]")
          .click()
        cy.title().should('contain', testCase.title)
        
      })
    })
  })
  

  // cy.title().then(title => {
  //   console.log(title)
  // }) // to print the title of the page into the console
