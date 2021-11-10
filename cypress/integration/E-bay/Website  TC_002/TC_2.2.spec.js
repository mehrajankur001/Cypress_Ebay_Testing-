/// < refference types="cypress" />

describe('Log In With Facebook', () => {

    before(() => {
        cy.visit('https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&ru=https%3A%2F%2Fwww.ebay.com%2F')
    })

    it("Log In With Facebook", () => {
        cy.get('#signin_fb_btn').should('exist').click()
        //cy.contains('Continue as').should('exist').click()
        
    })
})