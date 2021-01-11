/**
 * Created by Hafeez Rehman on 09/01/2021.
 */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the products page', () => {
  cy.visit('/products');
});

When('The products page is loaded', () => {
  cy.get('.page-title').should('be.visible');
});

Then('I see the page title', () => {
  cy.get('.page-title').should('contain.text', 'Products');
});

When('The products page is loaded', () => {
  cy.get('app-product-filter').should('be.visible');
});

Then('I see the products', () => {
  cy.get('.card-wrapper').should('length', 7);
});

When('The products page is loaded', () => {
  cy.get('app-cart').should('be.visible');
});

Then('I see the empty cart', () => {
  cy.get('.cart-item-wrapper').should('length', 0);
});

Given('I fill the values for price filter', () => {
  cy.get('#minValue').clear().type(0);
  cy.get('#maxValue').clear().type(150);
});

When('I click the filter button', () => {
  cy.get('#applyFilter').click();
});

Then('I see the right products', () => {
  cy.get('.card-wrapper').should('length', 2);
});

Given('The filter is applied', () => {
  cy.get('.card-wrapper').should('length', 2);
});

When('I click the reset button', () => {
  cy.get('#resetFilter').click();
});

Then('I see all the products', () => {
  cy.get('.card-wrapper').should('length', 7);
});

Given('The cart has no products', () => {
  cy.get('.cart-item-wrapper').should('length', 0);
});

When('I click the add to cart button for first product in the list', () => {
  cy.get('.card-wrapper').eq(0).find('.mat-mini-fab').click().then(() => {
    cy.get('.ng-popup__ok-btn').click();
  });
});

Then('I see the product in the cart', () => {
  cy.get('.cart-item-wrapper').should('length', 1);
});
