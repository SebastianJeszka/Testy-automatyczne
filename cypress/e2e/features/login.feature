Feature: Login Test

    Scenario: User checks images on login page
        Given User open ship-docs
        Then User checks logo image
        Then User checks images
        Then User checks zigzags
        Then User checks waves

    Scenario: User login to ship-docs as a user
        Given User open ship-docs
        When User input username and password
        Then User click submit button
        Then Login completed succesfully
        When User click on avatar
        Then User click on logout button
        Then User succesfully logged out