describe('Formulario de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Usuario deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type('Rogerio Mattos');
    cy.getByData('email-input').type('teste@email.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'O usuário cadastrado com sucesso');
  });
})