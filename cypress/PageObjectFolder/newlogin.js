class nepalInsurance{

elements ={
    usernameField: () => cy.get('#username'),
    passwordField: () => cy.get('#password'),
    loginButton: () => cy.get("[type='submit']"),
    errorMessage: () => cy.get('.negative.message')

}
    typeUsername(username){
        this.elements.usernameField().type(username);

    }
    typePassword(password){
        this.elements.passwordField().type(password);

    }
    clickLogin(){
        this.elements.loginButton().click()
    }

}
module.exports = new nepalInsurance();