/// < refference types="cypress" />


describe('Go to Electronic Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Electronic Page", () => {


        cy.get('[data-currenttabindex = 0]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Electronics/bn_7000259124')
    })

})