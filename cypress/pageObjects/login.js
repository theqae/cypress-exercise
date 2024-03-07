class login {
    userLogin() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
        cy.get('[data-qa="login-email"]').type(fakerData.email).should('have.value', fakerData.email)
        cy.get('[data-qa="login-password"]').type(fakerData.password).should('have.value', fakerData.password)
        cy.get('[data-qa="login-button"]').click()
        })
    }
}

module.exports = new login();