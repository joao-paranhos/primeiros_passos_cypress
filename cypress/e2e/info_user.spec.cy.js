import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/login';
import PageInfo from '../pages/info_user';

const loginpage = new LoginPage()
const pageinfo = new PageInfo()

describe ('Nesse teste iremos alterar as informações de cadastro do nosso usuario',()=>{

                            
    it('',()=>{

    loginpage.AcessLoginPage()
    loginpage.LoginWithUser(userData.userSucess.username,userData.userSucess.password)
    loginpage.CheckDashboardPage()
    pageinfo.Pageuserinfo()
    pageinfo.Checksucess()
})
})