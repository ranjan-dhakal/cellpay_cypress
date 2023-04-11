/// <reference types = "Cypress"/> 
import nepalInsurance from '../PageObjectFolder/newlogin';
import login from '../fixtures/login';

beforeEach(() => {
  cy.visit("https://demoapp.cellpay.com.np/")
})

describe('It should login', () => {
  it('Login', () => {
    cy.fixture("login").then((data) => {
      nepalInsurance.typeUsername(data.mobilenumber);
      nepalInsurance.typePassword(data.password);
      nepalInsurance.clickLogin();
    })
  })
})
