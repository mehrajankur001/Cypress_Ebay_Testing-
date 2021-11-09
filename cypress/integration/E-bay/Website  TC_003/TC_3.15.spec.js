/// < refference types="cypress" />


describe('Go to Motors Page', () => {
    beforeEach(() => {

        cy.visit('https://www.ebay.com/')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

    })
    it("Go to Motors Page", () => {

        cy.get('[data-currenttabindex = 7]').should('exist').click()
        cy.url().should('eq', 'https://www.ebay.com/sch/6028/i.html?_from=R40&_nkw=Auto+Parts+Accessories&_blrs=recall_filtering')
    })

})