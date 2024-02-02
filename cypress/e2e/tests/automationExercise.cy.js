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
    //Creating variables so we only need to change inputs in one place
    let fName = 'Boden'
    let email = 'qaTest@example.com'
    let password = 'Password1'
    //Click Signup/Login (this also verifies the button exists)
    cy.contains('Signup / Login').click()

    //The new page should contain "New User Signup!" 
    cy.get('.signup-form').contains('New User Signup!')

    //Enter name and email then assert that the values were entered
    cy.get('[data-qa="signup-name"]').type(fName).should('have.value', fName)
    cy.get('[data-qa="signup-email"]').type(email).should('have.value', email)

    //Click Signup (this also verifies the button exists)
    cy.get('[data-qa="signup-button"]').click()

    //Verify "Enter Account Information" exists
    cy.contains('Enter Account Information')

    //Fill the form and assert the expected values were entered
    cy.get('#id_gender1').click() //Used the element's ID because the radio buttons share the same data-qa tag
    cy.get('[data-qa="name"]').should('have.value', fName)
    cy.get('[data-qa="email"]').should('have.value', email)
    cy.get('[data-qa="password"]').type(password).should('have.value', password)
    cy.get('[data-qa="days"]').select('2').should('have.value', '2') //Date of Birth - Day
    cy.get('[data-qa="months"]').select('2').should('have.value','2') //Date of Birth - Month
    cy.get('[data-qa="years"]').select('1980').should('have.value','1980') // Date of Birth - Year 

    //Check 'Sign Up for Our News Letter'
    cy.get('#newsletter').check() //Used the element's ID because no qa-data tag exists
    
    //Check 'Receive special offers from our partners!'
    cy.get('#optin').check() //Used the element's ID because no qa-data tag exists
  })
})