describe('Formulario de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Não deve acessar com email invalido', ()=> {
        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('teste@teste');
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido');
    })

    it.only('Não deve permitir campo em branco', ()=> {
        cy.getByData('botao-login').click();
        cy.getByData('senha-input').type('123456');
        cy.getByData('botao-enviar').click();
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório');
    })
});