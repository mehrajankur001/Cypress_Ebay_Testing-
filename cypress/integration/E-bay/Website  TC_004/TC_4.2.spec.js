/// < refference types="cypress" />


describe('Go to Korean beauty Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Korean beauty Page", () => {

        cy.get('.hl-popular-destinations-elements > li').eq(1).should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/b/Korean-Health-and-Beauty/bn_7116437158')
    })

})