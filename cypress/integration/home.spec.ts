// home.spec.ts created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    }) 

    it('should say hello World', () => { 
        cy.get('#doWor').click()
    })

    it('should navigate to the signin page', () => {

        cy.get('a[href*="StaticGenerationPost"]').click()

        cy.url().should('include', '/StaticGenerationPost')

        cy.get('title').contains('SSG')
        cy.get('h1').should('be.visible')
    })

    it('should navigate to the covid result SSR', () => {

        cy.visit('/covid-result-server')

        cy.url().should('include', 'covid-result-server')

        cy.get('title').contains('Covid Result SSR')
    })

    it('should navigate to the covid result SSG', () => {

        cy.visit('/covid-result')

        cy.url().should('include', 'covid-result')

        cy.get('title').contains('Covid Result SSG')
    })
})