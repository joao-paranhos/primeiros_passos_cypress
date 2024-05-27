describe('Orange HRM Teste', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: '.oxd-button--main',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    WrongCrendentialAlert: '.oxd-alert-content'


  }

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    
  })


  it ('login sem sucesso', () =>{
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Teste')
    cy.get(selectorsList.passwordField).type('Teste')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.WrongCrendentialAlert).should('be.visible')
})
})
