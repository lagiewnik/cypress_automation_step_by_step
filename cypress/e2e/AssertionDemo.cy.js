it('Assertion demo', () =>{
    cy.visit('https://example.cypress.io');
    cy.contains('get').click()
    cy.get("#query-btn").should("contain","Button")
    .should("have.class", "query-btn")
    .should("be.visible")
    .invoke("attr","id").should('equal',"query-btn")
}
)