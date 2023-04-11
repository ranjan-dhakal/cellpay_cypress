export class Login{
    setUserName(username){
        cy.get('#username').type(username);
    }
    setPassword(password){
        cy.get('#password').type(password);
    }
    clickSubmit(){
        cy.get("[type='submit']").click();
    }
}   