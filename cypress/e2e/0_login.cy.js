
/// <reference types = "Cypress"/> 
  
export function login() {
  
  
  cy.visit("https://app.cellpay.com.np/")
  
  
  cy.fixture("login").then((data) => {
      
      cy.get('#username').type(data.mobilenumber); //for id tag # is needed
      cy.get('#password').type(data.password);
      cy.get("[type='submit']").click();
      cy.window().its('document').its('readyState').should('equal', 'complete')
      cy.url().should('include', 'dashboard')
      
      
            
    })
  
}

describe('login_page', ()=> {
  
    it('Login', ()=> {
    
      login()
  })
})


// let expName = "BINOD NAKHAN";
  

//       cy.get('.yt-d_block.yt-font_18px.yt-font_500').then( (x)=> {
    
//         let actName = x.text()
    
//         expect(actName).to.equal(expName)
    
    
//       } )