it('coingecko test', () => {
    cy.visit("https://coinpaprika.com/pl/")
    cy.get('.help-popup__close--photoBanner').click()
})