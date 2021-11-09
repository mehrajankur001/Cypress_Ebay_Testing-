/// < refference types="cypress" />

// describe('asss', () => {
//     it('test-one', () => {
//         cy.visit('https://intimecom.herokuapp.com/trackYourParcel')
//         //cy.contains('Searchs').should('exist')

//         cy.get('div')
//     })
// })

describe('User page', () => {
    beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('testdata').then((testdata) => {
            // "this" is still the test context object
            this.testdata = testdata
        })
    })

    // the test callback is in "function () { ... }" form
    it('has testdata', function () {
        // this.testdata exists
        expect(this.testdata.username).to.equal('mehrajd.ankur@gmail.com')
    })
})