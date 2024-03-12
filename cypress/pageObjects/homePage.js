class homePage {
    // Click Signup/Login (this also verifies the button exists)
    clickSignUpLogin() {
        cy.contains('Signup / Login').click()
        cy.get('.signup-form').contains('New User Signup!')
        cy.get('.login-form').contains('Login to your account')
    }

    clickContactUs() {
        cy.get('a[href*="contact_us"]').click()
        cy.contains('Get In Touch')
    }

    verifyLogin() {
        // Verify 'Logged in as username' is visible
        //cy.generateFakeData('fakerData')
        cy.readFile('./cypress/fixtures/fakerData.json').then((fakerData) => {
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('Logged in as '+ fakerData.firstName)
        })
    }

    deleteAccount() {
        cy.contains(' Delete Account').click()
        cy.contains('Account Deleted!')
    }

}

module.exports = new homePage();