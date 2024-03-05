class homePage {
    // Click Signup/Login (this also verifies the button exists)
    clickSignUpLogin() {
        cy.contains('Signup / Login').click()
        cy.get('.signup-form').contains('New User Signup!')
    }

}

module.exports = new homePage();