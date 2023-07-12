describe('Google', () => {
  it('pesquisar o termo "cypress"', () => {
    cy.visit('https://google.com');
    cy.get('#APjFqb').type('cypress{enter}');
    cy.get('[href="https://www.cypress.io/"] > .LC20lb').click();
  });

  it('pesquisar produto no mercado livre', () => {
    cy.visit('https://mercadolivre.com.br');
    cy.get('#cb1-edit').type('violão sete cordas{enter}');
  });
});