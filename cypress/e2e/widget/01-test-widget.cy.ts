describe('widget and modal', () => {
  before(() => cy.setBaseUrl('widget'));

  it('should be able to see the widget', () => {
    // use cy.session to have fresh sessionStorage
    cy.session('widgetSession', () => {
      cy.visit('/');

      // Check if widget is shown and open modal
      cy.contains('Help the people of Ukraine!').should('be.visible');
      cy.contains('Support').should('be.visible').click();

      // Check the modal text
      cy.contains('Help the people of Ukraine!').should('be.visible');

      // Interact with charity
      cy.get('div#charity-mira-action')
        .scrollIntoView()
        .within(() => {
          cy.contains('Mira Action').should('be.visible');
          cy.contains('See more').should('be.visible').click();

          // Verify the charity support button works
          cy.contains('Support')
            .should('be.visible')
            .should('have.attr', 'href')
            .and('include', 'miraaction')
            .then((link) => {
              cy.request(link).its('status').should('eq', 200);
            });
          cy.contains('Support').click();
        });

      // Close the modal
      cy.get('button#close-swu-modal').scrollIntoView().click();

      // Collapse the widget
      cy.get('button#close-swu-widget').should('be.visible').click();
      cy.contains('Help the people of Ukraine!').should('not.exist');

      // Expand the widget
      cy.get('div#swu-widget-flag').should('be.visible').click();
      cy.contains('Help the people of Ukraine!').should('be.visible');

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
