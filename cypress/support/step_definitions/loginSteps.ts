import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const username = Cypress.env('USER').admin[0]
const password = Cypress.env('USER').admin[1]

Given('User open ship-docs', () => {
    cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/users/sign-in').as("requestLogin");
    cy.visit('/');
    cy.url().should('contain', '/login')
})
Then ('User checks images', () => {
    cy.getByClass('mini-ship').should('be.visible');
    cy.getByClass('anchor').should('be.visible');
    cy.getByClass('lighthouse').should('be.visible');
    cy.getByClass('lighthouse-mirror').should('be.visible');
    cy.getByClass('steering-wheel').should('be.visible');
})
Then('User checks logo image', () =>{
    cy.getByClass('logo-frame').should('be.visible')
})
Then ('User checks zigzags', () => {
    cy.getByClass('zigzag1').should('be.visible');
    cy.getByClass('zigzag2').should('be.visible');
    cy.getByClass('zigzag3').should('be.visible');
    cy.getByClass('zigzag4').should('be.visible');
})
Then ('User checks waves', () => {
    cy.get('.waves > .wave1').should('be.visible');
    cy.get('.waves > .wave2').should('be.visible');
    cy.get('.waves > .wave3').should('be.visible');
    cy.get('.waves-mirror > .wave1').should('be.visible');
    cy.get('.waves-mirror > .wave2').should('be.visible');
})
When('User input username and password', () => {
    cy.getByClass('username-label').should('have.text', 'Login')
    cy.getById("username").type(username);
    cy.getById("password").type(password);
})
Then('User click submit button', () => {
    cy.getByClass('p-button-label').should('have.text', 'Login')
    cy.getByType("submit").click()
})
Then('Login completed succesfully', () => {
    cy.wait("@requestLogin").its('response.statusCode').should('eq', 200);
    cy.contains('Username or password is incorrect.').should('not.exist');
    cy.get('.p-avatar').should('be.visible')
})
When('User click on avatar', () => {
    cy.get('.p-avatar').click()
    cy.get('.p-submenu-header').should('contain', 'Logged in as')
})
Then('User click on logout button', () => {
    cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/users/logout?id=9').as("requestLogout");
    cy.contains('Logout').click()
})
Then('User succesfully logged out', () => {
    cy.url().should('eq', 'https://test.ship-docs.ttsw.com.pl/login')
    cy.wait("@requestLogout").its('response.statusCode').should('eq', 200);
})