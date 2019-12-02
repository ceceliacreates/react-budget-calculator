/// <reference types="cypress" />

describe('calculator navigations', () => {
    beforeEach(() => {
        
    })

    it('should navigate to the app', () => {
        cy.visit('https://ceceliacreates.github.io/react-budget-calculator/')
        cy.get('p').should('contain.text', '1')
    })

    it('should move forward a step when "Next" button is clicked', () => {
        cy.get('#next').click()
        cy.get('p').should('contain.text', '2')

    })

    it('should move back a step when "Back" button is clicked', () => {
        cy.get('#back').click()
        cy.get('p').should('contain.text', '1')
    })
})