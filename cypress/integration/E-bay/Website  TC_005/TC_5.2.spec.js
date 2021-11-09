/// < refference types="cypress" />


describe('Go to eBay Money Back Guarantee Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to eBay Money Back Guarantee Page", () => {


        cy.get('footer').scrollIntoView({ offset: { top: 250, left: 0 }, duration: 2000 })
        cy.get('footer > #gf-BIG > table.gf-t > tbody > tr > td').contains('eBay Money Back Guarantee').should('exist').click()
        cy.url().should('eq', 'https://pages.ebay.com/ebay-money-back-guarantee/')
    })

})