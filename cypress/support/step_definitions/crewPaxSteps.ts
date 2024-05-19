import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { CrewPaxPage } from "../../e2e/pages/crewPaxPage";

const crewPaxPage = new CrewPaxPage();

When('I navigate to the "Port Docs Mgmt" section and go to the "Crew Pax" subsection', () => {
    crewPaxPage.navigateToCrewPax();
});

Then('I should see the Crew Pax page', () => {
    // Verification steps here
});
Then('I should see the specified elements on the Crew Pax page', () => {
    crewPaxPage.verifyElementsOnCrewPaxPage();
});
When('I add a new element', () => {
    crewPaxPage.addNewElement();
});