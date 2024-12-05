class loginFailPage {
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']", 
            loginButton: "[type='submit']", 
            wrongCredentialAlert: "[role='alert']"
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginFail(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
        cy.get(this.selectorList().wrongCredentialAlert)
    }
    
}

export default loginFailPage