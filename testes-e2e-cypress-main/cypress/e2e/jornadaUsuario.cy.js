describe('Jornadas do usuario', () => {
  it('Deve permitir que uma pessoa usuaria acesse a aplicaçã, faça uma transação e realize um logout', () => {
    cy.visit('/')
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('teste@email.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  })
})