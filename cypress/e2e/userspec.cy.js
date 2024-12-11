import userData from '../fixtures/userData.json'
import loginPage from '../page/loginPage.js'
import dashboardPage from '../page/dashboardPage.js'
import menuPage from '../page/menuPage.js'
import myInfoPage from '../page/myInfoPage.js'

const Chance = require('chance'); //chance.js

const chance = new Chance();
const login = new loginPage()
const dashboard = new dashboardPage()
const menu = new menuPage()
const myInfo = new myInfoPage()


describe('orange', () => {

  it('login - success', () => {
    login.accessLoginPage()
    login.loginWithUser(userData.success.username, userData.success.password)
    dashboard.verificationUrl()
    menu.myInfoButton()
    myInfo.formName(chance.first(), chance.last(), chance.name())
    myInfo.genericTest()
    myInfo.buttonClose()
    myInfo.radioButton()
    myInfo.submitButton()
  })
})