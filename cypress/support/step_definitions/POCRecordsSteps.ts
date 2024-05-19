import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import POCRecordsPage from "../../e2e/pages/POCRecordsPage";

Given('I am logged in and on the main page', () => {
    POCRecordsPage.login();
});

When('I navigate to the POC Records section', () => {
    POCRecordsPage.navigateToPOCRecordsSection();
});

Then('I should see the table navbar elements on the page', () => {
    POCRecordsPage.checkTableNavbarElementsExistence();
});

Then('I should see the menu elements on the page', () => {
    POCRecordsPage.checkMenuElementsExistence();
});

When('I add a new record', () => {
    POCRecordsPage.addNewRecord();
});

When('I navigate to the Barcelona element', () => {
    POCRecordsPage.navigateToBarcelonaElement();
});

Then('I should see the required elements on the Barcelona page', () => {
    POCRecordsPage.checkElementsExistence();
});
