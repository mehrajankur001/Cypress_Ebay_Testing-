/// < refference types="cypress" />


describe('Go to Bidding & buying help Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Bidding & buying help Page", () => {


        cy.get('footer').scrollIntoView({ offset: { top: 250, left: 0 }, duration: 2000 })
        cy.get('footer > #gf-BIG > table.gf-t > tbody > tr > td').contains('Bidding & buying help').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/help/buying')
    })

})