/// < refference types="cypress" />


describe('Go to Home & Garden Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Home & Garden Page", () => {

        cy.get('[data-currenttabindex = 3]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Home-Garden/11700/bn_1853126')
    })

})