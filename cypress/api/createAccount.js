class createAccount {
    registerNewUser() {
        cy.generateFakeData('fakerData')
        cy.fixture('fakerData').then((fakerData) => {
            cy.request({
                method: 'POST',
                url: '/api/createAccount',
                form: true, // Expected by the endpoint to read to contents of the body
                body: {
                    name: fakerData.firstName,
                    email: fakerData.email,
                    password: fakerData.password,
                    title: "Mr",
                    birth_date: "03",
                    birth_month: "02",
                    birth_year: "2024",
                    firstname: fakerData.firstName,
                    lastname: fakerData.lastName,
                    company: fakerData.company,
                    address1: fakerData.address, 
                    address2: fakerData.address2,
                    country: fakerData.country,
                    zipcode: fakerData.zipCode,
                    state: fakerData.state, 
                    city: fakerData.city, 
                    mobile_number: fakerData.phoneNumber
                }
            }).then((response) =>{
                    let parsedBody = (JSON.parse(response.body))
                    // Assertions
                    expect(response.status).to.eq(200)
                    expect(parsedBody.responseCode).to.eq(201)
                    expect(parsedBody.message).to.eq("User created!")
            })  
        })
    }
}

module.exports = new createAccount()