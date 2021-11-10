/// < refference types="cypress" />

describe('Log In With Gmail', () => {

    it("Log In With Gmail", () => {
        cy.visit('https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F')
        cy.get('#signin_ggl_btn').should('exist').click()
        //cy.contains('Continue as').should('exist').click()
    })
})