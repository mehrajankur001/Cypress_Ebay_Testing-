/// < refference types="cypress" />


describe('Go to Search Product', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Search Product", () => {

        cy.get('[name=_nkw]').should('exist').type('one piece').get('#gh-btn').click()

    })

})