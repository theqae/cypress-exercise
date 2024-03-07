import homePage from '../pageObjects/homePage'
import signUp from '../pageObjects/signUp'

describe ('automation-exercise', () => {
  beforeEach(() => {

    cy.visit('/') // Visit the baseUrl
  })

  it('ensure we are on the hompage', () => {
    // Assert we are on the request a
    cy.url().should('eq', 'https://www.automationexercise.com/')
  })

  it('Test Case 1: Register User', () => {
    // Select Sign Up / Login
    homePage.clickSignUpLogin()

    // Complete the form and select Sign Up
    signUp.fillFirstName()
    signUp.fillEmail()
    signUp.clickSignUp()

    // Complete the form
    signUp.fillAccount()
    signUp.checkNewsLetter()
    signUp.optInSpecialOffers()
    signUp.fillAddress()

    //Select Create Account
    signUp.createAccount()

    // Verify the newly created user is logged in
    homePage.verifyLogin()
    }) 
})