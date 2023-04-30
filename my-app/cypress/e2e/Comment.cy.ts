describe('Comment', () => {
  it('should be created when user fills all fields', () => {
    cy.visit('/forms');

    cy.get('#name').type('Taras');
    cy.get('#surname').type('Spivak');
    cy.get('#birthday').type('2000-06-10');
    cy.get('#male').check();
    cy.get('select').select('hoodie');
    cy.get('textarea').type('hoodiehoodiehoodiehoodie');
    cy.get('input[type=file]').selectFile([
      {
        contents: Cypress.Buffer.from('file contents'),
        fileName: 'file.png',
        mimeType: 'image/png',
        lastModified: Date.now(),
      },
    ]);
    cy.get('input[type="checkbox"]').check();

    cy.get('.form__submit').click();

    cy.get('.comment').should('exist');
  });
});
