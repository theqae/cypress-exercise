class contact {
    fillContactForm () {
        cy.readFile('./cypress/fixtures/fakerData.json').then((fakerData) => {
            cy.get('[data-qa="name"]').type(fakerData.firstName).should('have.value', fakerData.firstName)
            cy.get('[data-qa="email"]').type(fakerData.email).should('have.value', fakerData.email)
            cy.get('[data-qa="subject"]').type("Test Subject").should('have.value', 'Test Subject')
            cy.get('[data-qa="message"]').type("Test message 123!@#").should('have.value', 'Test message 123!@#')
        })
    }
    
    fileUpload() {
        cy.get('input[type=file]').selectFile('./cypress/uploads/textUpload.txt')
    }

    clickSubmit()
    {
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status.alert.alert-success').should('contain', 'Success! Your details have been submitted successfully.')
    }
}

module.exports = new contact();