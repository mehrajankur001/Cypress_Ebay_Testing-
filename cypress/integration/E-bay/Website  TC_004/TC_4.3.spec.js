/// < refference types="cypress" />


describe('Go to Wristwatches Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Wristwatches Page", () => {

        cy.get('.hl-popular-destinations-elements > li').eq(2).should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Wristwatches/31387/bn_2408451')
    })

})