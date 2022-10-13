describe('unpublish widget', () => {
  it('should be able to unpublish widget', () => {
    cy.visit('/');

    // Verify the widget is in published state
    cy.contains('Widget Added').should('be.visible');

    // Unpublish
    cy.contains('Remove').click();

    cy.get('div[role=dialog]').within(() => {
      cy.get('button').contains('Remove').parent().should('be.disabled');
      cy.get('textarea[required]')
        .should('be.visible')
        .type('Changing my store')
        .should('have.value', 'Changing my store');
      cy.get('button').contains('Remove').should('not.be.disabled').click();
    });

    cy.contains('Widget was removed').should('be.visible');
  });
});
