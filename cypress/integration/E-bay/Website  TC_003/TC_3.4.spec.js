/// < refference types="cypress" />


describe('Go To Help and Contact Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')

    })
    it("Go To Help and Contact Page", () => {

        cy.get('#gh-p-3 > a').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/help/home')

    })

})