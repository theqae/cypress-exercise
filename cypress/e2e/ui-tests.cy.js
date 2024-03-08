import homePage from '../pageObjects/homePage'
import signUp from '../pageObjects/signUp'
import login from '../pageObjects/login'
import createAccount from '../api/createAccount'

describe ('automation-exercise', () => {
  beforeEach(() => {

    cy.visit('/') // Visit the baseUrl
    cy.url().should('eq', 'https://www.automationexercise.com/')
    cy.generateFakeData('fakerData')
  })

  it.skip('Test Case 1: Register User', () => {
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
    homePage.deleteAccount()
    }) 

    it.skip('Test Case 2: Login User with correct email and password', () => {
      createAccount.registerNewUser() // Use API to create account for test
      homePage.clickSignUpLogin() // 'Select Sign Up / Login'
      login.userLogin() // Valid login
      homePage.deleteAccount()

      
    })

    it.skip('Test Case 3: Login User with incorrect email and password', () => {
      homePage.clickSignUpLogin() // 'Select Sign Up / Login'
      login.incorrectUserLogin() // Invalid login

    }) 

    it('Test Case 4: Logout User', () => {
      createAccount.registerNewUser()
      homePage.clickSignUpLogin() // 'Select Sign Up / Login'
      login.userLogin() // Invalid login
      login.userLogout()

    }) 
})