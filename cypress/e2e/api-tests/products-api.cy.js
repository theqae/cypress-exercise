import { faker } from '@faker-js/faker';

context('Products List API', () => {
  
    it("GET Products List", () => {
      cy.request("GET", "/productsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200) // This syntax is required for parsing the JSON because the Response Header include 'content-type text/html; charset=utf-8' and not 'application/json'
        expect(parsedBody.products.length).to.eq(34) // Check that we received all products in the Product List

      })
    })


    it("POST Products List", () => {
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
  context("Brands List API", () => {
    it("GET Brands List", () => {
      cy.request("GET", "/brandsList").then((response) => {
        // Created a variable for the parsed JSON since we'll use it often  
        let parsedBody = (JSON.parse(response.body))
        // Assertions
        expect(response.status).to.eq(200)
        expect(parsedBody.responseCode).to.eq(200)
        expect(parsedBody.brands.length).to.eq(34) // Check that we received all brands in the Brands List
      })
    })

    it("PUT Brands List", () => {
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

  context("Search Product API", () => {
    it("POST Search Products", () => {
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
  })
