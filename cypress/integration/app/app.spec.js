/**
 * Created by Hafeez Rehman on 07/01/2021.
 */
import {Before, When, Then} from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  Cypress.on('window:before:load', win => {
    cy.spy(win.console, 'error');
  });
});

When('The homepage loads', () => {
  cy.visit('/home');
});

Then('The page title is displayed', (title) => {
  cy.title().should('include', 'NgrxTut');
});

When('The homepage load completes', () => {
  cy.visit('/home');
});

Then('There are no errors', () => {
  cy.window().then(win => {
    expect(win.console.error).to.have.callCount(0);
  });
});
