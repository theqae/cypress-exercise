import homePage from '../pageObjects/homePage'
import signUp from '../pageObjects/signUp'

describe ('automation-exercise', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.automationexercise.com/')

    
  })

  it.skip('ensure we are on the hompage', () => {
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
    
    /*// Create Account
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/account_created') // Verify we are on the account created page
    cy.contains('Account Created!') // Verify 'Account Created!' appears on screen
    
    // Verify 'Logged in as username' is visible
    cy.get('[data-qa="continue-button').click()
    cy.contains('Logged in as '+ fakerData.firstName)

    //Delete Account
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!')
    cy.get('[data-qa="continue-button').click() */
    }) 
})