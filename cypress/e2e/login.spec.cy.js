describe('Orange HRM Teste', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get('.oxd-button--main').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
    
  })


  it ('login sem sucesso', () =>{
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Teste')
    cy.get("[name='password']").type('Teste')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content').should('be.visible')


})
})
