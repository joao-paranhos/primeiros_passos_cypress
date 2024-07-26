class PageInfo

{ SelectorList(){
    const Selector ={usernameField: "[name='username']",
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
                    Dropdown: ".oxd-select-text--active"}
                
                return Selector}


    Pageuserinfo(){

        cy.get(this.SelectorList().myinfoButton).click()
        cy.get(this.SelectorList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.SelectorList().MiddleNameField).clear().type('MiddleNameTest')
        cy.get(this.SelectorList().LastNameField).clear().type('LastNameTest')
        cy.get(this.SelectorList().GenericField).eq(3).clear().type('Employee')
        cy.get(this.SelectorList().GenericField).eq(4).clear().type('OtherIDTest')
        cy.get(this.SelectorList().GenericField).eq(5).clear().type('Drivers license number')
        cy.get(this.SelectorList().DateField).eq(1).clear().type('2025-01-01')
        cy.get(this.SelectorList().DateCloseButton).eq(0).click()
        cy.get(this.SelectorList().SexField).eq(0).click()
        cy.get(this.SelectorList().GenericField).eq(8).clear().type('2002-06-11')
        cy.get(this.SelectorList().DateCloseButton).eq(0).click()
        cy.get(this.SelectorList().Dropdown).eq(0).click()
        cy.contains('Brazilian').click()
        cy.get(this.SelectorList().Dropdown).eq(1).click()
        cy.contains('Single').click()
        cy.get(this.SelectorList().Dropdown).eq(2).click()
        cy.contains('O+').click()
        cy.get(this.SelectorList().Dropdown).eq(0).click()
        cy.get(this.SelectorList().SaveButton).eq(0).click()}
    
    Checksucess(){

        cy.contains('Successfully Updated').should('be.visible')
    }
    }

    export default PageInfo
    






