class LoginPage 

{   SelectorList(){
        const Selectors = 

            {usernameField: "[name='username']",
            passwordField:"[name='password']",
            loginButton: ".oxd-button--main",
            WrongCrendentialAlert: '.oxd-alert-content',
            dashboardGrid: '.orangehrm-dashboard-grid'}
        
        return Selectors
        }
        
AcessLoginPage()

{cy.visit('/auth/login')}


LoginWithUser(username, password)

{cy.get(this.SelectorList().usernameField).type(username),
 cy.get(this.SelectorList().passwordField).type(password),
 cy.get(this.SelectorList().loginButton).click()
}

CheckDashboardPage(){

    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.SelectorList().dashboardGrid).should('be.visible')
}

alertlogin(){

    cy.get(this.SelectorList().WrongCrendentialAlert).should('be.visible')
}}

export default LoginPage