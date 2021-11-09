/// < refference types="cypress" />


describe('Go to Fashion Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Fashion Page", () => {

        cy.get('[data-currenttabindex = 1]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Fashion/bn_7000259856')
    })

})