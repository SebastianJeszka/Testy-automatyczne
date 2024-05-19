/// <reference types="cypress" />

const username = Cypress.env('USER').admin[0]
const password = Cypress.env('USER').admin[1]

declare namespace Cypress {

  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    getById(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    getByType(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    getByClass(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    login()
    navButton(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>

  }
}
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})
Cypress.Commands.add("getById", (selector) => {
  return cy.get(`[id=${selector}]`)
})
Cypress.Commands.add("getByType", (selector) => {
  return cy.get(`[type=${selector}]`)
})
Cypress.Commands.add("getByClass", (selector) => {
  return cy.get(`[class=${selector}]`)
})
Cypress.Commands.add("navButton", (string) => {
  return cy.getByClass('p-button-label').contains(`${string}`)
})

Cypress.Commands.add("login", () => {
  cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/users/sign-in').as("requestLogin")
  cy.visit('/')
  cy.getById("username").type(username)
  cy.getById("password").type(password)
  cy.getByType("submit").click()
  cy.wait("@requestLogin").its('response.statusCode').should('eq', 200)
  cy.contains('Username or password is incorrect.').should('not.exist')
})