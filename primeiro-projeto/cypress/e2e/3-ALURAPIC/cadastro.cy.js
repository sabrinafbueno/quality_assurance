describe ('Cadastros de usuarios alura pic', () => {
    
    beforeEach(() => {
        cy.visit('/')
    })
 
    it('verifica mensagem de e-mail invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('sabrina');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');         
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');         
    })

    it('verifica mensagem de nome invalido ', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('s');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 2').should('be.visible');         
    })

    it('verifica mensagem de user name invalido ', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Sabrina');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Must be lower case').should('be.visible');         
    })

    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuarios => {

        it (`registra novo usuario ${usuarios.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuarios.email);
            cy.get('input[formcontrolname="fullName"]').type(usuarios.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuarios.userName);
            cy.get('input[formcontrolname="password"]').type(usuarios.password);
            cy.contains('button', 'Register').click();

        })
    })

    


})
