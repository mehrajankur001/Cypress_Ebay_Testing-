/// < refference types="cypress" />


describe('Go to Sell Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Sell Page", () => {

        cy.get('.hl-popular-destinations-elements > li').eq(6).should('exist').click()
    })

})