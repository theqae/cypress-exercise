class signUp {

    fillFirstName() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => { 
            cy.get('[data-qa="signup-name"]').type(fakerData.firstName).should('have.value', fakerData.firstName)
        })
        
    }    

    fillEmail() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
            cy.get('[data-qa="signup-email"]').type(fakerData.email).should('have.value', fakerData.email)
        })
    }

    clickSignUp() {
        // Click Signup (this also verifies the button exists)
        cy.get('[data-qa="signup-button"]').click()

        // Verify "Enter Account Information" exists
        cy.contains('Enter Account Information')
    }
    fillAccount() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => { 
            //Fill Address Section
            cy.get('#id_gender1').click() // Used the element's ID because the radio buttons share the same data-qa tag
            cy.get('[data-qa="name"]').should('have.value', fakerData.firstName)
            cy.get('[data-qa="email"]').should('have.value', fakerData.email)
            cy.get('[data-qa="password"]').type(fakerData.password).should('have.value', fakerData.password)
            cy.get('[data-qa="days"]').select('2').should('have.value', '2') // Date of Birth - Day
            cy.get('[data-qa="months"]').select('2').should('have.value','2') // Date of Birth - Month
            cy.get('[data-qa="years"]').select('1980').should('have.value','1980') // Date of Birth - Year 
        })
    }

    checkNewsLetter() {
        // Check 'Sign Up for Our News Letter'
    cy.get('#newsletter').check() //Used the element's ID because no qa-data tag exists
    }

    optInSpecialOffers() {
        // Check 'Receive special offers from our partners!'
    cy.get('#optin').check() //Used the element's ID because no qa-data tag exists
    }

    fillAddress() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => { 
            // Fill Address Section
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
        })
    }

    createAccount() {
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('eq', 'https://www.automationexercise.com/account_created') // Verify we are on the account created page
    cy.contains('Account Created!') // Verify 'Account Created!' appears on screen
    }
}
module.exports = new signUp();