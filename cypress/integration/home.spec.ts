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

    it('should navigate to the signin page', () => {


        cy.get('a[href*="StaticGenerationPost"]').click()

        cy.url().should('include', '/StaticGenerationPost')

        cy.get('title').contains('SSG')
        cy.get('h1').should('be.visible')
    })
})