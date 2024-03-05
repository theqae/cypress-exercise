class homePage {
    // Click Signup/Login (this also verifies the button exists)
    clickSignUpLogin() {
        cy.contains('Signup / Login').click()
        cy.get('.signup-form').contains('New User Signup!')
    }

    verifyLogin() {
        // Verify 'Logged in as username' is visible
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
        cy.get('[data-qa="continue-button').click()
        cy.contains('Logged in as '+ fakerData.firstName)
        })
    }

}

module.exports = new homePage();