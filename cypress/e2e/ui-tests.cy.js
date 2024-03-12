import homePage from '../pageObjects/homePage'
import signUp from '../pageObjects/signUp'
import login from '../pageObjects/login'
import createAccount from '../api/createAccount'
import contact_us from '../pageObjects/contact_us'

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

    it.skip('Test Case 4: Logout User', () => {
      createAccount.registerNewUser()
      homePage.clickSignUpLogin() // 'Select Sign Up / Login'
      login.userLogin()
      login.userLogout()

    })
    
    it.skip('Test Case 5: Register User with existing email', () => {
      createAccount.registerNewUser()
      homePage.clickSignUpLogin() // 'Select Sign Up / Login'
      signUp.fillFirstName()
      signUp.fillEmail()
      signUp.existingUserClickSignUp()

    }) 

    it('Test Case 6: Contact Us Form', () => {
      homePage.clickContactUs()
      contact_us.fillContactForm()
      contact_us.fileUpload()
      contact_us.clickSubmit()

    }) 
})