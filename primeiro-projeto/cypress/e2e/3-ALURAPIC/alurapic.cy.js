describe ('Usabilidades da Home', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', ' ALURAPIC').should('be.visible');
    })

    it('verifica menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })

    

    

    

   

    


    


})
