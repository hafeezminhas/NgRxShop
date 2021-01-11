Feature: HomePageFeature
  Home Page

  Scenario: See the Home page
    Given I navigate to the home page
    When The home page is loaded
    Then I see the home page
