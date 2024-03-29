class login {
    verifyLogin() {
        //cy.generateFakeData('fakerData')
        cy.readFile('./cypress/fixtures/fakerData.json').then((fakerData) => {
            cy.request({
                method: 'POST',
                url: '/api/verifyLogin',
                form: true, // Expected by the endpoint to read to contents of the body
                body: {
                email: fakerData.email,
                password: fakerData.password
                }
            }).then((response) =>{
                    let parsedBody = (JSON.parse(response.body))
                    // Assertions
                    expect(response.status).to.eq(200)
                    expect(parsedBody.responseCode).to.eq(200)
                    expect(parsedBody.message).to.eq("User exists!")
            })
        })
    }
}

module.exports = new login()