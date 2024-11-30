import userData from '../fixtures/userData.json'

describe('orange', () => {

  const selectorsList = { 
    usernameField: "[name='username']",
    passwordField: "[name='password']", 
    loginButton: "[type='submit']", 
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module", 
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails'] [data-v-7b563373='']",
    firstName: "[name='firstName']",
    middleName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericTest: ".oxd-input--active",
    buttonCloseData: ".--close",
    buttonSubmit: "[type='submit']"

    }
    
  it.only('login - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.success.username)
    cy.get(selectorsList.passwordField).type(userData.success.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type('test')
    cy.get(selectorsList.middleName).clear().type('MiddleTest')
    cy.get(selectorsList.lastName).clear().type('LastTest')
    cy.get(selectorsList.genericTest).eq(3).clear().type('employtest')
    cy.get(selectorsList.genericTest).eq(4).clear().type('otherTest')
    cy.get(selectorsList.genericTest).eq(5).clear().type('driveTest')
    cy.get(selectorsList.genericTest).eq(6).clear().type('2024-29-11')
    cy.get(selectorsList.buttonCloseData).click()
    cy.get(selectorsList.buttonSubmit).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
   
  })
  
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.fail.username)
    cy.get(selectorsList.passwordField).type(userData.fail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  })
})