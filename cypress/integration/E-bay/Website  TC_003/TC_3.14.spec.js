/// < refference types="cypress" />


describe('Go to Industrial equipment Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Industrial equipment Page", () => {

        cy.get('[data-currenttabindex = 6]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Business-Industrial/12576/bn_1853744')
    })

})