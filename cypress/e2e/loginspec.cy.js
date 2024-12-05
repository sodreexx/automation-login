import userData from '../fixtures/userData.json'
import loginPage from '../page/loginPage.js'
import dashboardPage from '../page/dashboardPage.js'
import menuPage from '../page/menuPage.js'
import myInfoPage from '../page/myInfoPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfo = new myInfoPage()

describe('orange', () => {

  it.only('login - success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.success.username, userData.success.password)
    dashboard.verificationUrl()
    menu.myInfoButton()
    myInfo.formName()
    myInfo.genericTest()
    myInfo.buttonClose()
    myInfo.radioButton()
    myInfo.submitButton()
   
  })
  
  it('login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.fail.username)
    cy.get(selectorsList.passwordField).type(userData.fail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
  })
})