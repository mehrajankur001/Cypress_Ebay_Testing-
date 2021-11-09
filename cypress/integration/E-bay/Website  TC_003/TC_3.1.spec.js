/// < refference types="cypress" />


describe('Go To Deals Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')

    })
    it("Go To Daily Deals Page", () => {

        cy.get('#gh-p-1 > a').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/globaldeals')

    })
})