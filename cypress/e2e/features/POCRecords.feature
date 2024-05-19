Feature: POC Records

  Scenario: Log in and navigate to the POC Records section
    Given I am logged in and on the main page
    When I navigate to the POC Records section
    Then I should see the table navbar elements on the page
    And I should see the menu elements on the page
    And I add a new record
    When I navigate to the Barcelona element
    Then I should see the required elements on the Barcelona page
