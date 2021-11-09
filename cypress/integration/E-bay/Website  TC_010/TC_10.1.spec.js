/// < refference types="cypress" />


describe('Go to Seller Information Center Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Seller Information Center Page", () => {


        cy.get('footer').scrollIntoView({ offset: { top: 250, left: 0 }, duration: 2000 })
        cy.get('footer > #gf-BIG > table.gf-t > tbody > tr > td').contains('Seller Information Center').should('exist').click()
        cy.url().should('eq', 'https://pages.ebay.com/seller-center/index.html')
    })

})