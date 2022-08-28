import {LoginPage} from "./pages/login-page"
const loginPage = new LoginPage()

describe("POm demo", ()=> {
    it("POM demo", ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername("Admin")
        //cy.get('[name="username"]').type("Admin")
        // cy.get('[name="password"]').type("admin123")
        // cy.get('button[type="submit"]').click()
        loginPage.enterPassword("admin123")
        loginPage.clickLogin()
    })
})