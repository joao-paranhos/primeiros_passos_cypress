import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/login'

const loginpage = new LoginPage()

describe('Orange HRM Teste', () => {

  it('atualização de informações de usuario ', () => {
    loginpage.AcessLoginPage()
    loginpage.LoginWithUser(userData.userSucess.username, userData.userSucess.password)
    loginpage.CheckDashboardPage()
    
    
  })


  it ('login sem sucesso', () =>{
  
    loginpage.AcessLoginPage()
    loginpage.LoginWithUser(userData.userFail.username,userData.userFail.password)
    loginpage.alertlogin()

})
})
