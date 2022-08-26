describe("Assertion use", () => {

    it("Assertion one", () => {
        cy.visit("https://coinpaprika.com")
        cy.get('.help-popup__close--photoBanner').click()
        cy.get('.cookie-banner > .icon-close-coins').click()
    })


})