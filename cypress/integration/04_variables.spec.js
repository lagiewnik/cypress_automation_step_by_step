describe('VAriables and aliases', () => {
    beforeEach(function () {
        cy.visit("https://demoqa.com/modal-dialogs")
    })
    // it("Missconception return of variable", () => {
    //     const textButton  = cy.get("#showSmallModal").text()
    //     cy.log(textButton)
    // })

    it("Closures and variables", () => {
        cy.get("#showSmallModal").then($modalButton => {
            const smallModalBtnText = $modalButton.text()
            cy.log(smallModalBtnText)

            $modalButton.click()
            cy.get("#example-modal-sizes-title-sm").contains(smallModalBtnText, { matchCase: false })

        })
    })

    // it("Context misconcetion", () => {
    //     cy.log(smallModalBtnText)
    // })

    it("ALIAS DEMO", function () {
        cy.get("#showSmallModal").invoke('text').as('invokeText')

        cy.get("#showSmallModal").then($modalBtn => {
            const smallBtnText = $modalBtn.text()
            cy.log(smallBtnText)

            cy.wrap(smallBtnText).as('wrapText')
        })

        cy.log("Inside the same IT Invoke result: " + this.invokeText)
        cy.log("Inside the same IT Wrap result: " + this.wrapText)
    })

    it("SHARING CONTEXT", function () {
        cy.log("Invoke result: " + this.invokeText)
        cy.log("Wrap result: " + this.wrapText)
    })
})