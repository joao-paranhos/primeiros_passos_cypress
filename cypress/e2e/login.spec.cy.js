import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button--main',
    dashboardGrid: '.orangehrm-dashboard-grid',
    WrongCrendentialAlert: '.oxd-alert-content'


  }

  

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    
  })


  it ('login sem sucesso', () =>{
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCrendentialAlert).should('be.visible')


})
})
