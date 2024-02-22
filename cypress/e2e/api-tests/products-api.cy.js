import { faker } from '@faker-js/faker';

describe ('Products List API', () => {
  context("GET /productsList", () => {
  
    it("gets a list of products", () => {

      cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
      expect(response.status).to.eq(200)
      expect(JSON.parse(response.body).responseCode).to.eq(200) //This syntax is required for parsing the JSON because the Response Header include 'content-type text/html; charset=utf-8' and not 'application/json'
      expect(response.body).length.to.be.greaterThan(1)

      })
    })
  })

  context("POST /productsList", () => {
    it("POST /productsList", () => {
      cy.request("POST", "https://automationexercise.com/api/productsList").then((response) => {
        expect(response.status).to.eq(200)
        expect(JSON.parse(response.body).responseCode).to.eq(405)
        //expect(response.body).to.have.property('message')
        expect(JSON.parse(response.body).message).to.eq('This request method is not supported.')
      })
    })
  })
})
