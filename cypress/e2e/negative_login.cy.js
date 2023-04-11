
/// <reference types = "Cypress"/> 
  
export function login_negative() {
    cy.fixture("negativedata").then((data) => {
  
      cy.visit("https://app.cellpay.com.np/")
  
      
       
        data.forEach((userdata) => {
        cy.get('#username').type(userdata.mobilenumber); //for id tag # is needed
        cy.get('#password').type(userdata.password);
        cy.get("[type='submit']").click();
        
  
  
      
            if(userdata.mobilenumber=='9860876238' && userdata.password=='123456')
              {
              cy.get('.yt-d_block.yt-font_18px.yt-font_500').should('have.text', userdata.expected);
              cy.get('.navbar-account-btn').click()
              cy.get('.dropdown-menu-right').contains('Sign out').click()
              }
          else{
              cy.get('.content>p').should('have.text',userdata.expected);
              }
              
      })
    }) 
  }
  
  describe('login_page', ()=> {
    
      it('Login Data Drivern', ()=> {
      
        login_negative()
    })
  })
  
  
  // let expName = "BINOD NAKHAN";
    
  
  //       cy.get('.yt-d_block.yt-font_18px.yt-font_500').then( (x)=> {
      
  //         let actName = x.text()
      
  //         expect(actName).to.equal(expName)
      
      
  //       } )