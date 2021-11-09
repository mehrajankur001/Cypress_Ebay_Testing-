/// < refference types="cypress" />


describe('Go to Sneakers Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Sneakers Page", () => {

        cy.get('.hl-popular-destinations-elements >  li:first').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Retail-Campaign/bn_7116433159')
    })

})