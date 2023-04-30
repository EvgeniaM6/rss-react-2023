describe('Form', () => {
  it("should show alert when all fields don't fill", () => {
    cy.visit('/forms');

    cy.get('#birthday').type('2000-06-10');

    cy.get('#birthday').should('have.value', '2000-06-10');

    cy.get('.form__submit').click();

    cy.get('.birthday .form__error').should('not.exist');
  });
});
