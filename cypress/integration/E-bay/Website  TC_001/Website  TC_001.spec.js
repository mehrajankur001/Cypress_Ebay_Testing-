/// < refference types="cypress" />

describe('Home Page', () => {
    it("home page test", () => {
        cy.visit('https://www.ebay.com/')
        //cy.get('#gh-ug-flex').should('have.text', 'or register')
        //cy.get('.hl-card-header__headline').should('have.text', 'Explore Popular CategoriesDaily DealsExplore popular categories')
    })
})