/// < refference types="cypress" />


describe('Go to Fishing Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Fishing Page", () => {

        cy.get('.hl-popular-destinations-elements > li').eq(3).should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Fishing-Equipment-Supplies/1492/bn_1851047')
    })

})