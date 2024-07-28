import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/login';
import PageInfo from '../pages/info_user';

const loginpage = new LoginPage()
const pageinfo = new PageInfo()

const Chance = require ('chance')
const chance = new Chance()
describe ('Nesse teste iremos alterar as informações de cadastro do nosso usuario',()=>{

                            
    it('',()=>{

    loginpage.AcessLoginPage()
    loginpage.LoginWithUser(userData.userSucess.username,userData.userSucess.password)
    loginpage.CheckDashboardPage()
    pageinfo.Pageuserinfo(chance.first(),chance.first(),chance.last())
    pageinfo.FillEmployeedDetails(chance.ssn({ dashes: false }),chance.cpf(),chance.string(),'2025-01-01','2002-06-11')
    pageinfo.fillstatus()
    pageinfo.Checksucess()
})
})