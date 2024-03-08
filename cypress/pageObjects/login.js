class login {
    userLogin() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
        cy.get('[data-qa="login-email"]').type(fakerData.email).should('have.value', fakerData.email)
        cy.get('[data-qa="login-password"]').type(fakerData.password).should('have.value', fakerData.password)
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Logged in as '+ fakerData.firstName)

        })
    }

    incorrectUserLogin() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
        cy.get('[data-qa="login-email"]').type(fakerData.email).should('have.value', fakerData.email)
        cy.get('[data-qa="login-password"]').type(fakerData.password).should('have.value', fakerData.password)
        cy.get('[data-qa="login-button"]').click()
        cy.contains('Your email or password is incorrect!')


        })
    }

    userLogout() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
        cy.contains('Logged in as '+ fakerData.firstName)
        cy.get('a[href*="logout"]').click()
        cy.contains('Login to your account')


        })
    }
}

module.exports = new login();