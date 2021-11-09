/// < refference types="cypress" />

describe('Log In With Facebook', () => {

    it("user name / mail", () => {
        cy.visit('https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F')
        cy.get('#signin_ggl_btn').should('exist').click()
        //cy.contains('Continue as').should('exist').click()
    })
})