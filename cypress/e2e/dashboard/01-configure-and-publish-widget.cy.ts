describe('configure and publish widget', () => {
  it('should be able configure and publish', () => {
    cy.visit('/');

    // Verify the widget is in clean state
    cy.contains('Help Ukraine').should('be.visible');

    cy.contains('Add widget to your store').click();

    // Color Selection
    cy.get('img[alt="Black colored widget"]').click();
    cy.contains('Continue').click();

    // Placement Selection
    cy.get('div#placement-top-left').click();
    cy.contains('Continue').click();

    // Charity Selection
    cy.get('input#unicef').should('be.disabled');
    cy.get('label[for=razom]').click();
    cy.get('input#unicef').should('not.be.disabled');
    cy.get('label[for=razom]').click();
    cy.contains('Continue').click();

    // Modal Preview
    cy.get('#preview').click();
    cy.get('img[alt="Protestors standing against war in Ukraine"]').should('be.visible');

    // Modal Preview
    cy.get('#configure').click();
    cy.get('#modal-title').should('be.visible').type(' And Show More <3');
    cy.get('#modal-body').should('be.visible');
    cy.contains('Reset to default').click();
    cy.get('#modal-title').should('have.value', 'Help the people of Ukraine!');

    // Publish
    cy.contains('Publish').click();
    cy.contains('Widget was published').should('be.visible');
    cy.contains('Widget Added').should('be.visible');
    cy.contains('The people of Ukraine very much appreciate your help!').should('be.visible');
  });
});
