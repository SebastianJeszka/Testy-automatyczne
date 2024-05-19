import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('Test logowania', () => {
    cy.login()
})

// Scenario: User change template to light mode and dark mode
When('User click on button to change template to light mode', () => {
    cy.getByClass('p-inputswitch-slider').click()
})
Then('User succesfully changed template to light mode', () => {
    cy.getByClass('theme-light').should('exist')
})
When('User click on button to change template to dark mode', () => {
    cy.getByClass('p-inputswitch-slider').click()
})
Then('User succesfully changed template to dark mode', () => {
    cy.getByClass('theme-dark').should('exist')
})

// Scenario: User click buttons on nav bar
When('User click on button to open e-LogBooks Page', () => {
    cy.navButton('e-LogBooks').click()
})
Then('User succesfully opened e-LogBooks Page', () => {
    cy.url().should('contain', '/e-log-books/home')
})
When('User click on button to open Reporting Page', () => {
    cy.navButton('Reporting').click()
})
Then('User succesfully opened Reporting Page', () => {
    cy.url().should('contain', '/reporting/reports')
})
When('User click on button to open Port Docs Mgmt Page', () => {
    cy.navButton('Port Docs Mgmt').click()
})
Then('User succesfully opened Port Docs Mgmt Page', () => {
    cy.url().should('contain', '/port-docs-mgmt/home')
})
When('User click on button to show Notifications', () => {
    cy.get('.notification-button').click()
})
Then('User succesfully showed Notifications', () => {
    cy.getByClass('title').contains("Notifications").should('be.visible')
})