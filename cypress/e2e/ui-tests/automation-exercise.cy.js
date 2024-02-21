import { faker } from '@faker-js/faker';

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

  it('register the user', () => {
    // Creating variables so we only need to change inputs in one place
    let randomFName = faker.person.firstName()
    let randomEmail = faker.internet.email()
    let password = 'Password1'
    let randomAddressFName = faker.person.firstName()
    let randomAddressLName = faker.person.lastName()
    
    // Click Signup/Login (this also verifies the button exists)
    cy.contains('Signup / Login').click()

    // The new page should contain "New User Signup!" 
    cy.get('.signup-form').contains('New User Signup!')

    // Enter name and email then assert that the values were entered
    cy.get('[data-qa="signup-name"]').type(randomFName).should('have.value', randomFName)
    cy.get('[data-qa="signup-email"]').type(randomEmail).should('have.value', randomEmail)

    // Click Signup (this also verifies the button exists)
    cy.get('[data-qa="signup-button"]').click()

    // Verify "Enter Account Information" exists
    cy.contains('Enter Account Information')

    // Fill Account information while asserting the expected values
    cy.get('#id_gender1').click() // Used the element's ID because the radio buttons share the same data-qa tag
    cy.get('[data-qa="name"]').should('have.value', randomFName)
    cy.get('[data-qa="email"]').should('have.value', randomEmail)
    cy.get('[data-qa="password"]').type(password).should('have.value', password)
    cy.get('[data-qa="days"]').select('2').should('have.value', '2') // Date of Birth - Day
    cy.get('[data-qa="months"]').select('2').should('have.value','2') // Date of Birth - Month
    cy.get('[data-qa="years"]').select('1980').should('have.value','1980') // Date of Birth - Year 

    // Check 'Sign Up for Our News Letter'
    cy.get('#newsletter').check() //Used the element's ID because no qa-data tag exists
    
    // Check 'Receive special offers from our partners!'
    cy.get('#optin').check() //Used the element's ID because no qa-data tag exists

    // Fill Address information
    cy.get('[data-qa="first_name"]').type(randomAddressFName).should('have.value', randomAddressFName)
    cy.get('[data-qa="last_name"]').type(randomAddressLName).should('have.value', randomAddressLName)
    cy.get('[data-qa="company"]').type('TheQAEngineer').should('have.value', 'TheQAEngineer')
    cy.get('[data-qa="address"]').type('123 Main St.').should('have.value', '123 Main St.')
    cy.get('[data-qa="address2"]').type('Apt 12').should('have.value', 'Apt 12')
    cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States')
    cy.get('[data-qa="state"]').type('Pennsyltucky').should('have.value', 'Pennsyltucky')
    cy.get('[data-qa="city"]').type('Beachville').should('have.value', 'Beachville')
    cy.get('[data-qa="zipcode"]').type('55555').should('have.value', '55555')
    cy.get('[data-qa="mobile_number"]').type('(555) 565-6755').should('have.value', '(555) 565-6755')
    
    // Create Account
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/account_created') // Verify we are on the account created page
    cy.contains('Account Created!') // Verify 'Account Created!' appears on screen
  })
})