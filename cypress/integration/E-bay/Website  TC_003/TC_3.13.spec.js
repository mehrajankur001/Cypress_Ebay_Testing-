/// < refference types="cypress" />


describe('Go to Collectibles and Art Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Collectibles and Art Page", () => {

        cy.get('[data-currenttabindex = 5]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Collectibles-Art/bn_7000259855')
    })

})