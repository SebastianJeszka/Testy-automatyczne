const username = Cypress.env('USER').admin[0]
const password = Cypress.env('USER').admin[1]
const wrong_username = Cypress.env('USER').user1[0]
const wrong_password = Cypress.env('USER').user1[1]
const wrong_size_username = Cypress.env('USER').user2[0]
const wrong_size_password = Cypress.env('USER').user2[1]

class WrongLoginPage {
    wrongUsername() {
        cy.getById("username").type(wrong_username)
        cy.getById("password").type(password)
        cy.getByType("submit").click()
    }
    wrongUsernameAssert() {
        cy.wait("@requestWrongLogin").its('response.statusCode').should('eq', 401)
        cy.contains('Username or password is incorrect.').should('be.visible')
    }

    wrongPassword() {
        cy.getById("username").type(username)
        cy.getById("password").type(wrong_password)
        cy.getByType("submit").click()
    }
    wrongPasswordAssert() {
        cy.wait("@requestWrongLogin").its('response.statusCode').should('eq', 401)
        cy.contains('Username or password is incorrect.').should('be.visible')
    }

    wrongBoth() {
        cy.getById("username").type(wrong_username)
        cy.getById("password").type(wrong_password)
        cy.getByType("submit").click()
    }
    wrongBothAssert() {
        cy.wait("@requestWrongLogin").its('response.statusCode').should('eq', 401)
        cy.contains('Username or password is incorrect.').should('be.visible')
    }

    wrongSizesOfLetters() {
        cy.getById("username").type(wrong_size_username)
        cy.getById("password").type(wrong_size_password)
        cy.getByType("submit").click()
    }
    wrongSizesOfLettersAssert() {
        cy.wait("@requestWrongLogin").its('response.statusCode').should('eq', 401)
        cy.contains('Username or password is incorrect.').should('be.visible')
    }
}

export default WrongLoginPage;