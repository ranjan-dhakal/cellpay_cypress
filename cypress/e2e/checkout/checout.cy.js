
/// <reference types = "Cypress"/> 

  
  describe('Checkout', ()=> {
    
      it('Checkout', ()=> {
      
        cy.visit("file:///C:/Users/Sanjeet%20Jung%20Gurung/Downloads/demo-client.html")
    
    
        cy.fixture("checkout").then((data) => {
            
            data.forEach((value) => {
                cy.get('[name="mode"]').type(value.Mode);
                cy.get('[name="transaction_type"]').type(data.TransactionType);
                cy.get('[name="merchant_id"]').type(value.Merchant_id);
                cy.get('[name="description"]').type(value.Description);
                cy.get('[name="amount"]').type(value.Amount);
                cy.get('[name="invoice_no"]').type(value.Invoice);
                cy.get('[name="trace_no"]').type(value.Trace);
    
                cy.get("[type='submit']").click();
            })
            
            
            
            
                  
          })
    })
  })
  
  
  // let expName = "BINOD NAKHAN";
    
  
  //       cy.get('.yt-d_block.yt-font_18px.yt-font_500').then( (x)=> {
      
  //         let actName = x.text()
      
  //         expect(actName).to.equal(expName)
      
      
  //       } )