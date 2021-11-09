/// < refference types="cypress" />

describe('Log In', () => {

    beforeEach(function () {
        cy.fixture('testdata').then((testdata) => {
            // "this" is still the test context object
            this.testdata = testdata
        })
        cy.visit('https://www.ebay.com/')
    })

    it("user name / mail", function () {
        cy.get('.gh-ug-guest > a').should('have.text', 'Sign in').click()
        cy.url().should('include', 'SignIn')
        cy.get('#userid').should('exist').type(this.testdata.username)
        cy.get('#signin-continue-btn').should('exist').click()
        cy.get('#pass').should('exist').type(this.testdata.password)
        cy.get('#sgnBt').should('exist').click()
        cy.get('#gh-ug').should('exist').click()
        //cy.get('#gh-uo > a ').should('exist').click()
    })
})