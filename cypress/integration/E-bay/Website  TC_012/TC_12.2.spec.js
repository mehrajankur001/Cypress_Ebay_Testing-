/// < refference types="cypress" />


describe('Go to Select Category', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        cy.viewport(1050, 700)

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Select Category", () => {

        cy.get('#gh-cat-box > select').select('267').get('#gh-btn').click()
        //cy.select('[name=_sacat]')
        // cy.get('#gh-cat').click()
        

    })

})