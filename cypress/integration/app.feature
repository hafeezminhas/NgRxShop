Feature: Verify if the application loads successfully
  I want to verify if the application loads successfully

  Scenario: Successfully load the application
    When The homepage loads
    Then The page title is displayed

    When The homepage load completes
    Then There are no errors
