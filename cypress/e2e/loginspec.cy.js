import userData from '../fixtures/userData.json'

describe('orange', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']", 
    loginButton: "[type='submit']", 
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module", 
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
    }
    
  it('login - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.success.username)
    cy.get(selectorsList.passwordField).type(userData.success.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
    cy.get(selectorsList.dashboardGrid)
  })
  
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.fail.username)
    cy.get(selectorsList.passwordField).type(userData.fail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  })
})