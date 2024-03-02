import { faker } from '@faker-js/faker';

// Variables used during test execution
let firstName = faker.person.firstName()
let lastName = faker.person.lastName()
let email = faker.internet.email()
let password = 'Password1'
let address = faker.location.streetAddress()
let address2 = faker.location.secondaryAddress()
let country = 'United States'
let state = faker.location.state()
let city = faker.location.city()
let zipCode = faker.location.zipCode()
let phoneNumber = faker.phone.number()
let company = faker.company.name()

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
    // Click Signup/Login (this also verifies the button exists)
    cy.contains('Signup / Login').click()

    // The new page should contain "New User Signup!" 
    cy.get('.signup-form').contains('New User Signup!')

    // Enter name and email then assert that the values were entered
    cy.get('[data-qa="signup-name"]').type(firstName).should('have.value', firstName)
    cy.get('[data-qa="signup-email"]').type(email).should('have.value', email)

    // Click Signup (this also verifies the button exists)
    cy.get('[data-qa="signup-button"]').click()

    // Verify "Enter Account Information" exists
    cy.contains('Enter Account Information')

    // Fill Account information while asserting the expected values
    cy.get('#id_gender1').click() // Used the element's ID because the radio buttons share the same data-qa tag
    cy.get('[data-qa="name"]').should('have.value', firstName)
    cy.get('[data-qa="email"]').should('have.value', email)
    cy.get('[data-qa="password"]').type(password).should('have.value', password)
    cy.get('[data-qa="days"]').select('2').should('have.value', '2') // Date of Birth - Day
    cy.get('[data-qa="months"]').select('2').should('have.value','2') // Date of Birth - Month
    cy.get('[data-qa="years"]').select('1980').should('have.value','1980') // Date of Birth - Year 

    // Check 'Sign Up for Our News Letter'
    cy.get('#newsletter').check() //Used the element's ID because no qa-data tag exists
    
    // Check 'Receive special offers from our partners!'
    cy.get('#optin').check() //Used the element's ID because no qa-data tag exists

    // Fill Address information
    cy.get('[data-qa="first_name"]').type(firstName).should('have.value', firstName)
    cy.get('[data-qa="last_name"]').type(lastName).should('have.value', lastName)
    cy.get('[data-qa="company"]').type(company).should('have.value', company)
    cy.get('[data-qa="address"]').type(address).should('have.value', address)
    cy.get('[data-qa="address2"]').type(address2).should('have.value', address2)
    cy.get('[data-qa="country"]').select(country).should('have.value', country)
    cy.get('[data-qa="state"]').type(state).should('have.value', state)
    cy.get('[data-qa="city"]').type(city).should('have.value', city)
    cy.get('[data-qa="zipcode"]').type(zipCode).should('have.value', zipCode)
    cy.get('[data-qa="mobile_number"]').type(phoneNumber).should('have.value', phoneNumber)
    
    // Create Account
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/account_created') // Verify we are on the account created page
    cy.contains('Account Created!') // Verify 'Account Created!' appears on screen
  })
})