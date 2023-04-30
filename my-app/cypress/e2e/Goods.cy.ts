describe('Goods', () => {
  it('should have search button', () => {
    cy.visit('/');

    cy.contains('search!');
  });
});
