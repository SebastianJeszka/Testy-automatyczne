Feature: Wrong Login Test

  Background: Open ship-docs page
    Given User open ship-docs Page

  Scenario: User try to login with wrong username
    When User input wrong username and correct password
    Then User receive error because of wrong username

  Scenario: User try to login with wrong password
    When User input correct username and wrong password
    Then User receive error because of wrong password

  Scenario: User try to login with wrong username and password
    When User input wrong username and wrong password
    Then User receive error because of wrong username and password

  Scenario: User try to login with wrong different size of letters
    When User input wrong username and wrong password with big letters
    Then User receive error because of wrong username and password small letters