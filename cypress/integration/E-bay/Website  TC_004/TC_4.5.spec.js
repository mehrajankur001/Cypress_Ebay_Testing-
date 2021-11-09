/// < refference types="cypress" />


describe('Go to Collectibles Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Collectibles Page", () => {

        cy.get('.hl-popular-destinations-elements > li').eq(4).should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Collectibles-Art/bn_7000259855')
    })

})