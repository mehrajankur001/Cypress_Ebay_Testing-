/// < refference types="cypress" />


describe('Ship To Pop up', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')

    })
    it("Ship To Pop up", () => {

        cy.get('#gh-shipto-click').should('exist').click()

    })

})