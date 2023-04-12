const { login } = require("./0_login.cy");


beforeEach(() => {
    login();
    cy.wait(3000)
    cy.get("[href='/dashboard/governmentPayment']").eq(0)
        .click();
   });

describe('My Cypress Test Suite', () => {
    const testCases = [    
        { title: ' CRO ', alt: 'cro', ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
        { title: ' Department Of Customs ', alt: 'departmentOfCustoms', ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
        { title: ' Government Revenue (FCGO) ', alt: "governmentRevenue(FCGO)", ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
        { title: ' IRD ', alt: 'ird', ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
        { title: ' LokSewa ', alt: 'loksewa', ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
        { title: ' Passport ', alt: 'passport', ebpget: `[name='ebpNumber']`, enumber:'12345', amountget: `[name='amount']`, amount:'100'},
     ]
  
    it.only('it should navigate to six multiple government services', () => {
      cy.wrap(testCases).each((testCase) => {
        cy.wait(3000)
        cy.get(`[alt="${testCase.alt}"]`)
            .click()
        cy.get('.card-header')
            .eq(1)
            .should('have.text',testCase.title)
            cy.scrollTo(0,0)
        cy.get(testCase.ebpget)
            .type(testCase.enumber)
            cy.scrollTo(0,0)
        cy.get(testCase.amountget)
            .type(testCase.amount)
        cy.get('[type="submit"]')
            .click()
        cy.get('.has-error').should('have.text','Your request could not be completed at this moment, please try after sometime.')
        cy.scrollTo(0,0)
        cy.wait(3000)
        cy.reload()
        })
    })

  })