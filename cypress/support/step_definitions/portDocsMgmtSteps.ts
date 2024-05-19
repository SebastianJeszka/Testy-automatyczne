import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PortDocsMgmtPage } from "../../e2e/pages/portDocsMgmtPage";

const portDocsPageInstance = new PortDocsMgmtPage();

Given('I am logged in and on the main page ', () => {
    cy.login();
});

When('I navigate to the port docs management section', () => {
    portDocsPageInstance.navigateToSection();
});

When('I click on all map elements and verify', () => {
    portDocsPageInstance.verifyCountriesForAllMapElements();
});

Then('I should see flags next to each country name', () => {
    portDocsPageInstance.verifyCountryFlags();
});

// Then('I should see country names matching the reference list', () => {
//     portDocsPageInstance.verifyCountryNames();
// });
//
// Then('I should see continent names matching the reference list for each country', () => {
//     portDocsPageInstance.verifyContinentName();
// });
