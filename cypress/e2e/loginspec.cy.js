import userData from '../fixtures/userData.json'
import loginPage from '../page/loginPage.js'
import dashboardPage from '../page/dashboardPage.js'
import loginFailPage from '../page/loginFailPage.js'


const login = new loginPage()
const dashboard = new dashboardPage()
const loginFail = new loginFailPage()

describe('orange', () => {

  it('login - success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.success.username, userData.success.password)
    dashboard.verificationUrl()
  })
  
  it('login - fail', () => {
    loginFail.accessLoginPage()
    loginFail.loginFail(userData.fail.username, userData.fail.password)
  })
})