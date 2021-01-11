Feature: ProductsPageFeature
  Products Page View Loaded

  Scenario: Load the products page
    Given I navigate to the products page
    When The products page is loaded
    Then I see the page title
    When The products page is loaded
    Then I see the products
    When The products page is loaded
    Then I see the empty cart

  Scenario: Apply the products filter
    Given I fill the values for price filter
    When I click the filter button
    Then I see the right products

  Scenario: Reset the products filter
    Given The filter is applied
    When I click the reset button
    Then I see all the products

  Scenario: Add a product to cart
    Given The cart has no products
    When I click the add to cart button for first product in the list
    Then I see the product in the cart
