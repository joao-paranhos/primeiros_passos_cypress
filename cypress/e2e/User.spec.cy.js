import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button--main',
    dashboardGrid: '.orangehrm-dashboard-grid',
    WrongCrendentialAlert: '.oxd-alert-content'


  }

  

  it.only('atualização de informações de usuario ', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid).should('be.visible')
    
  })


  it ('login sem sucesso', () =>{
  
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCrendentialAlert).should('be.visible')

})
})
