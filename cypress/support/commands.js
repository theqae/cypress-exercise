// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateFakeData', (filename) => {
    const fakerData = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: 'Password1',
        address: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: 'United States',
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        company: faker.company.name()
    }

    cy.writeFile('cypress/fixtures/fakerData.json', fakerData)
})