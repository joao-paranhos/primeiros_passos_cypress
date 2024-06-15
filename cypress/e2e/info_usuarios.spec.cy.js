import userData from '../fixtures/users/user-data.json'
describe ('Nesse teste iremos alterar as informações de cadastro do nosso usuario',()=>{

    const selectorsList = {usernameField: "[name='username']",
                            passwordField:"[name='password']",
                            loginButton: ".oxd-button--main",
                            dashboardGrid: ".orangehrm-dashboard-grid",
                            myinfoButton: "[href='/web/index.php/pim/viewMyDetails']",
                            firstNameField: "[name='firstName']",
                            MiddleNameField: "[name='middleName']",
                            LastNameField: "[name='lastName']",
                            GenericField: ".oxd-input--active",
                            DateField: "[placeholder='yyyy-dd-mm']",
                            DateCloseButton: ".--close",
                            SaveButton: ".orangehrm-left-space",
                            SexField: ".oxd-radio-wrapper",
                            DateBirth: ""}
                            
    it('',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid).should('be.visible')
    cy.get(selectorsList.myinfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.MiddleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.LastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.GenericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.GenericField).eq(4).clear().type('OtherIDTest')
    cy.get(selectorsList.GenericField).eq(5).clear().type('Drivers license number')
    cy.get(selectorsList.DateField).eq(1).clear().type('2025-01-01')
    cy.get(selectorsList.DateCloseButton).eq(0).click()
    cy.get(selectorsList.SexField).eq(0).click()
    cy.get(selectorsList.GenericField).eq(8).clear().type('2002-06-11')
    cy.get(selectorsList.DateCloseButton).eq(2).click()
    cy.get(selectorsList.SaveButton)
    cy.contains('Successfully Updated').should('be.visible')

    


    








    })






})