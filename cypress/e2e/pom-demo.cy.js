import {LoginPage} from "./pages/login-page"
const loginPage = new LoginPage()

describe("POm demo Login tests", ()=> {

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it("correct login", ()=> {
        
        loginPage.enterUsername("Admin")
        loginPage.enterPassword("admin123")
        loginPage.clickLogin()
        cy.url().should("contain","web/index.php/pim/viewEmployeeList")
    })

    it("invalid login", ()=> {
        
        loginPage.enterUsername("Admin123")
        loginPage.enterPassword("admin123")
        loginPage.clickLogin()
        loginPage.getAlert()
    })
})