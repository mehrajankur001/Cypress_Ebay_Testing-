/// < refference types="cypress" />


describe('Go to Sportd Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Sportd Page", () => {

        cy.get('[data-currenttabindex = 4]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Sporting-Goods/888/bn_1865031')
    })

})