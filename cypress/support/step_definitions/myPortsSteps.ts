import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MyPortsPage } from "../../e2e/pages/myPortsPage";

const myPortsPage = new MyPortsPage();

Given('Iam logged in and on the main page', () => {
    myPortsPage.login();
});

When('I navigate to the specific page', () => {
    myPortsPage.navigateToSpecificPage();
});

Then('I should see the specified elements on the page', () => {
    myPortsPage.verifyElements();
});

Then('I should perform specific actions', () => {
    myPortsPage.performActions();
});
