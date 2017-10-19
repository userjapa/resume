describe('Home', () => {
  it('Check title', () => {
    cy.visit('http://localhost:8081');
    cy.title().should('include', 'Resumé');
  });

  it('Check h content', () => {
    cy.get('div span').should('contain', 'Willian Hiroshi Simabukuro');
  });
});
