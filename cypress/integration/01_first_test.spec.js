/// <reference types="cypress" />

beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720)
})


it("coingecko test", () => {
    cy.visit("https://coinmarketcap.com/")
    cy.contains("Search").click()
    cy.get('[placeholder="What are you looking for?"]').type("Synapse")
    cy.get('a').contains('Synapse Network').click()
})