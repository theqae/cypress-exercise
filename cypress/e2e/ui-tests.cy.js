import homePage from '../pageObjects/homePage'
import signUp, { createAccount } from '../pageObjects/signUp'

describe ('automation-exercise', () => {
  beforeEach(() => {

    cy.visit('/')
  })

  it('ensure we are on the hompage', () => {
    // Assert we are on the request a
    cy.url().should('eq', 'https://www.automationexercise.com/')
  })

  it('Test Case 1: Register User', () => {
    homePage.clickSignUpLogin()

    signUp.fillFirstName()
    signUp.fillEmail()
    signUp.clickSignUp()

    signUp.fillAccount()
    signUp.checkNewsLetter()
    signUp.optInSpecialOffers()
    signUp.fillAddress()

    signUp.createAccount()

    homePage.verifyLogin()
    }) 
})