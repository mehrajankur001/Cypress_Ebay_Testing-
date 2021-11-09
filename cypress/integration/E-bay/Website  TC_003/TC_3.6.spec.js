/// < refference types="cypress" />


describe('Go to Selling Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')

    })
    it("Go to Selling Page", () => {

        cy.get('#gh-p-2 > a').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/sl/sell')
    })

})