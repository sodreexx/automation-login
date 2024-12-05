import userData from '../fixtures/userData.json'
import loginPage from '../page/loginPage.js'
import dashboardPage from '../page/dashboardPage.js'
import menuPage from '../page/menuPage.js'
import myInfoPage from '../page/myInfoPage.js'
import loginFailPage from '../page/loginFailPage.js'

const login = new loginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfo = new myInfoPage()
const loginFail = new loginFailPage()

describe('orange', () => {

  it('login - success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.success.username, userData.success.password)
    dashboard.verificationUrl()
    menu.myInfoButton()
    myInfo.formName('kyle', 'potter', 'mendez')
    myInfo.genericTest()
    myInfo.buttonClose()
    myInfo.radioButton()
    myInfo.submitButton()
  })
  
  it.only('login - fail', () => {
    loginFail.accessLoginPage()
    loginFail.loginFail(userData.fail.username, userData.fail.password)
    // cy.visit('/auth/login')
    // cy.get(selectorsList.usernameField).type(userData.fail.username)
    // cy.get(selectorsList.passwordField).type(userData.fail.password)
    // cy.get(selectorsList.loginButton).click()
    // cy.get(selectorsList.wrongCredentialAlert)
   
  })
})