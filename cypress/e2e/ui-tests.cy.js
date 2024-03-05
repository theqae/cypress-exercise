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
    cy.generateFakeData('fakerData')
    cy.fixture('fakerData').then((fakerData) => {
    // Click Signup/Login (this also verifies the button exists)
    cy.contains('Signup / Login').click()

    // The new page should contain "New User Signup!" 
    cy.get('.signup-form').contains('New User Signup!')

    // Enter name and email then assert that the values were entered
    cy.get('[data-qa="signup-name"]').type(fakerData.firstName).should('have.value', fakerData.firstName)
    cy.get('[data-qa="signup-email"]').type(fakerData.email).should('have.value', fakerData.email)

    // Click Signup (this also verifies the button exists)
    cy.get('[data-qa="signup-button"]').click()

    // Verify "Enter Account Information" exists
    cy.contains('Enter Account Information')

    // Fill Account information while asserting the expected values
    cy.get('#id_gender1').click() // Used the element's ID because the radio buttons share the same data-qa tag
    cy.get('[data-qa="name"]').should('have.value', fakerData.firstName)
    cy.get('[data-qa="email"]').should('have.value', fakerData.email)
    cy.get('[data-qa="password"]').type(fakerData.password).should('have.value', fakerData.password)
    cy.get('[data-qa="days"]').select('2').should('have.value', '2') // Date of Birth - Day
    cy.get('[data-qa="months"]').select('2').should('have.value','2') // Date of Birth - Month
    cy.get('[data-qa="years"]').select('1980').should('have.value','1980') // Date of Birth - Year 

    // Check 'Sign Up for Our News Letter'
    cy.get('#newsletter').check() //Used the element's ID because no qa-data tag exists
    
    // Check 'Receive special offers from our partners!'
    cy.get('#optin').check() //Used the element's ID because no qa-data tag exists

    // Fill Address information
    cy.get('[data-qa="first_name"]').type(fakerData.firstName).should('have.value', fakerData.firstName)
    cy.get('[data-qa="last_name"]').type(fakerData.lastName).should('have.value', fakerData.lastName)
    cy.get('[data-qa="company"]').type(fakerData.company).should('have.value', fakerData.company)
    cy.get('[data-qa="address"]').type(fakerData.address).should('have.value', fakerData.address)
    cy.get('[data-qa="address2"]').type(fakerData.address2).should('have.value', fakerData.address2)
    cy.get('[data-qa="country"]').select(fakerData.country).should('have.value', fakerData.country)
    cy.get('[data-qa="state"]').type(fakerData.state).should('have.value', fakerData.state)
    cy.get('[data-qa="city"]').type(fakerData.city).should('have.value', fakerData.city)
    cy.get('[data-qa="zipcode"]').type(fakerData.zipCode).should('have.value', fakerData.zipCode)
    cy.get('[data-qa="mobile_number"]').type(fakerData.phoneNumber).should('have.value', fakerData.phoneNumber)
    
    // Create Account
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/account_created') // Verify we are on the account created page
    cy.contains('Account Created!') // Verify 'Account Created!' appears on screen
    
    // Verify 'Logged in as username' is visible
    cy.get('[data-qa="continue-button').click()
    cy.contains('Logged in as '+ fakerData.firstName)

    //Delete Account
    cy.get('a[href="/delete_account"]').click()
    cy.contains('Account Deleted!')
    cy.get('[data-qa="continue-button').click()
    })
  })
})