/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('contains Jerrod', () => {
        cy.get('h1').should('contain', 'Blink')
    })
})
