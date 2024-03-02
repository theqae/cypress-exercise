import { faker } from '@faker-js/faker';

// Variables used during test execution
let firstName = faker.person.firstName()
let lastName = faker.person.lastName()
let email = faker.internet.email()
let password = 'Password1'
let address = faker.location.streetAddress()
let address2 = faker.location.secondaryAddress()
let country = 'United States'
let state = faker.location.state()
let city = faker.location.city()
let zipCode = faker.location.zipCode()
let phoneNumber = faker.phone.number()
let company = faker.company.name()

context('Products List', () => {
  
    it("API 1: Get All Products List", () => {
      cy.request("GET", "/productsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200) // This syntax is required for parsing the JSON because the Response Header include 'content-type text/html; charset=utf-8' and not 'application/json'
        expect(parsedBody.products.length).to.eq(34) // Check that we received all products in the Product List
      })
    })
    
    it("API 2: POST To All Products List", () => {
      cy.request("POST", "/productsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(405)
        expect(parsedBody.message).to.eq('This request method is not supported.')
      })
    })
  })
  context("Brands List", () => {
    it("API 3: Get All Brands List", () => {
      cy.request("GET", "/brandsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200)
        expect(parsedBody.brands.length).to.eq(34) // Check that we received all brands in the Brands List
      })
    })

    it("API 4: PUT To All Brands List", () => {
      cy.request("PUT", "/brandsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(405)
        expect(parsedBody.message).to.eq('This request method is not supported.')
      })
    })
  })

  context("Search Product", () => {
    it("API 5: POST To Search Product", () => {
      cy.request({
        method: 'POST',
        url: '/searchProduct',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          search_product: 'jean'
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200)
        expect(parsedBody.products.length).to.eq(3)
      })
    })
    it("API 6: POST To Search Product without search_product parameter", () => {
      cy.request("POST", "/searchProduct").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(400)
        expect(parsedBody.message).to.eq('Bad request, search_product parameter is missing in POST request.')
      })
    })
  })
  context("Create Account", () => {
    it("API 11: POST To Create/Register User Account", () => {
      cy.request({
        method: 'POST',
        url: '/createAccount',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          name: firstName,
          email: email,
          password: password,
          title: "Mr",
          birth_date: "03",
          birth_month: "02",
          birth_year: "2024",
          firstname: firstName,
          lastname: lastName,
          company: company,
          address1: address, 
          address2: address2,
          country: country,
          zipcode: zipCode,
          state: state, 
          city: city, 
          mobile_number: phoneNumber
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(201)
        expect(parsedBody.message).to.eq("User created!")
      })
    })
  })
  context("Login", () => {
    it("API 7: POST To Verify Login with valid details", () => {
      cy.request({
        method: 'POST',
        url: '/verifyLogin',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          email: email,
          password: password
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200)
        expect(parsedBody.message).to.eq("User exists!")
      })
    })
    it("API 8: POST To Verify Login without email parameter", () => {
      cy.request({
        method: 'POST',
        url: '/verifyLogin',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          password: password
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(400)
        expect(parsedBody.message).to.eq("Bad request, email or password parameter is missing in POST request.")
      })
    })
    it("API 9: DELETE To Verify Login", () => {
      cy.request("DELETE", "/verifyLogin").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(405)
        expect(parsedBody.message).to.eq('This request method is not supported.')
      })
    })
    it("API 10: POST To Verify Login with invalid details", () => {
      cy.request({
        method: 'POST',
        url: '/verifyLogin',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          email: "invalidEmail@test.com",
          password: "password"
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(404)
        expect(parsedBody.message).to.eq("User not found!")
      })
    })
  })
  context("Update Account", () => {
    it("API 13: PUT METHOD To Update User Account", () => {
      cy.request({
        method: 'PUT',
        url: '/updateAccount',
        form: true, // Expected by the endpoint to read to contents of the body
        body: {
          name: firstName,
          email: email,
          password: password,
          birth_date: "05",
          birth_month: "03",
          birth_year: "1993",
          address1: "123 Sesame St."
          }
      }).then((response) =>{
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200)
        expect(parsedBody.message).to.eq("User updated!")
      })
    })
  })
  context("User Detail By Email", () => {
    it("API 14: GET user account detail by email", () => {
      cy.request("GET", "getUserDetailByEmail?email=${email}").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200) // This syntax is required for parsing the JSON because the Response Header include 'content-type text/html; charset=utf-8' and not 'application/json'
        expect(parsedBody.user.length).to.eq(1) // Check that we received all products in the Product List

      })
    })
  })