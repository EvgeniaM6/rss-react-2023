describe('App E2E', () => {
  it('change url when switch to About page', () => {
    cy.visit('/forms');

    cy.contains('About us').click();

    cy.url().should('include', '/about');
  });
});
