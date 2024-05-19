Feature: Port Docs Management

  Scenario: Verifying country flags, names, and continents for all continents
    Given I am logged in and on the main page
    When I navigate to the port docs management section
    And I click on all map elements and verify
