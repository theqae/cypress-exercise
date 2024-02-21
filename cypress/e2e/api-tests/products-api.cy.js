import { faker } from '@faker-js/faker';

context("GET /productsList", () => {
  it("gets a list of products", () => {
    cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).length.to.be.greaterThan(1)
    })
  })
})
context("POST /productsList", () => {
  it("POST /productsList", () => {
    cy.request("POST", "https://automationexercise.com/api/productsList").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.eq('responseCode": 405, "message": "This request method is not supported.')
      expect(response.body).to.have.property('message', 'This request method is not supported.')
    })
  })
})
