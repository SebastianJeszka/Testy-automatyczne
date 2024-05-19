import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import WrongLoginPage from '../../e2e/pages/WrongLoginPage';

const wrongLoginPage = new WrongLoginPage();

Given('User open ship-docs Page', () => {
    cy.intercept('POST', 'https://test.ship-docs.ttsw.com.pl/api/users/sign-in').as("requestWrongLogin")
    cy.visit('/')
})
When('User input wrong username and correct password', () => {
    wrongLoginPage.wrongUsername();
})
Then('User receive error because of wrong username', () => {
    wrongLoginPage.wrongUsernameAssert();
})
When('User input correct username and wrong password', () => {
    wrongLoginPage.wrongPassword();
})
Then('User receive error because of wrong password', () => {
    wrongLoginPage.wrongPasswordAssert();
})
When('User input wrong username and wrong password', () => {
    wrongLoginPage.wrongBoth();
})
Then('User receive error because of wrong username and password', () => {
    wrongLoginPage.wrongBothAssert();
})
When ('User input wrong username and wrong password with big letters', () => {
    wrongLoginPage.wrongSizesOfLetters();
})
Then ('User receive error because of wrong username and password small letters', () => {
    wrongLoginPage.wrongSizesOfLettersAssert();
})

