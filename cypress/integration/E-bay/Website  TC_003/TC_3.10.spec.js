/// < refference types="cypress" />


describe('Go to Health & Beauty Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Health & Beauty Page", () => {

        cy.get('[data-currenttabindex = 2]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Health-Beauty/26395/bn_1865479')
    })

})