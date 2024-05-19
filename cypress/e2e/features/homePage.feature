Feature: Home Page Test

    Background: login to account
        Given Test logowania

    Scenario: User change template to light mode and dark mode
        When User click on button to change template to light mode
        Then User succesfully changed template to light mode
        When User click on button to change template to dark mode
        Then User succesfully changed template to dark mode

    Scenario: User click buttons on nav bar
        When User click on button to open e-LogBooks Page
        Then User succesfully opened e-LogBooks Page
        When User click on button to open Reporting Page
        Then User succesfully opened Reporting Page
        When User click on button to open Port Docs Mgmt Page
        Then User succesfully opened Port Docs Mgmt Page
        When User click on button to show Notifications
        Then User succesfully showed Notifications