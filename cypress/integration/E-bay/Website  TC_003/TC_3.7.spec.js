/// < refference types="cypress" />


describe('Watchlist Popup', () => {
    beforeEach(() => {
        cy.viewport(1050, 700)
        cy.visit('https://www.ebay.com/')
    })
    it("Watchlist Popup", () => {
        cy.get('#gh-wl-click > div').should('exist').click()
    })

})