/**
 * Created by Hafeez Rehman on 07/01/2021.
 */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the home page', () => {
  cy.visit('/home');
});

When('The home page is loaded', () => {
  cy.get('.mat-typography').should('be.visible');
});

Then('I see the home page', () => {
  cy.get('mat-card-header').should('contain.text', 'Home View');
  cy.get('mat-card-content').should('contain.text', 'This is the home page content for this app');
});
