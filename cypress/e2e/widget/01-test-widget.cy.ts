describe('configure and publish widget', () => {
  before(() => {
    Cypress.config('baseUrl', 'http://localhost:3002/widget/');
  });
  it('should be able to see the widget', () => {
    // use cy.session to have fresh sessionStorage
    cy.session('widgetSession', () => {
      cy.visit('/');

      // Check if widget is shown and open modal
      cy.contains('Help the people of Ukraine!').should('be.visible');
      cy.contains('Support').should('be.visible').click();

      // Check the modal text
      cy.contains('Help the people of Ukraine!').should('be.visible');

      cy.get('a').contains('See more').scrollIntoView();
      cy.contains('Razom').should('be.visible');
      cy.contains('See more').should('be.visible').click();
      cy.contains('Support')
        .should('be.visible')
        .should('have.attr', 'href')
        .and('include', 'razomforukraine');

      // Close the modal
      cy.get('button#close-swu-modal').scrollIntoView().click();

      // Collapse the widget
      cy.get('button#close-swu-widget').should('be.visible').click();
      cy.contains('Help the people of Ukraine!').should('not.exist');

      // Fully close the widget
      cy.get('button#close-swu-widget').should('be.visible').click();
      cy.get('button#close-swu-widget').should('not.exist');
      cy.contains('Help the people of Ukraine!').should('not.exist');
    });
  });
});
