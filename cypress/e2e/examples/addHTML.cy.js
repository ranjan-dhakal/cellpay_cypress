

// How To Add an HTML Element Dynamically in Cypress?
describe('', () => {
    it('', () => {
        cy.visit('https://app.cellpay.com.np/');
        var el = window.document.createElement('button');
        el.innerText = "Ranjan Dhakal"
    cy.get('[type="submit"]').then((value) => {

            value.get(0).appendChild(el);
        })

   
});
});

