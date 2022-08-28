export class LoginPage{
    
    username_selector = '[name="username"]'
    password_selector = '[name="password"]'
    button_login_selector = 'button[type="submit"]'

    enterUsername(username){
        cy.get(this.username_selector).type(username)
    }

    enterPassword(password){
        cy.get(this.password_selector).type(password)
    }

    clickLogin(){
        cy.get(this.button_login_selector).click()
    }

    getAlert(){
        return cy.get("div[role='alert'")
    }
}