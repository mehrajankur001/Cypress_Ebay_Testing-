/// < refference types="cypress" />


describe('Go to Start selling Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Start selling Page", () => {


        cy.get('footer').scrollIntoView({ offset: { top: 250, left: 0 }, duration: 2000 })
        cy.get('footer > #gf-BIG > table.gf-t > tbody > tr > td').contains('Start selling').should('exist').click()
        cy.url().should('eq', 'https://reg.ebay.com/reg/Upgrade?pid=6115&ru=https%3A%2F%2Fbulksell.ebay.com%2Fws%2FeBayISAPI.dll%3FSingleList%26sellingMode%3DAddItem%26')
    })

})