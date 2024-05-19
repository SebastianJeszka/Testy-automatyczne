Feature: Crew Pax Feature
  Background: login to account
    Given Test logowania

  Scenario: Log in and navigate to the Crew Pax section
    When User click on Port Docs Mgmt button
    When I navigate to the "Port Docs Mgmt" section and go to the "Crew Pax" subsection
    Then I should see the Crew Pax page
    And I should see the specified elements on the Crew Pax page
    And I add a new element