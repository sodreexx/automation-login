class myInfoPage {

    selectorList(){
        const selectors = {
            firstName: "[name='firstName']",
            middleName: "[name='middleName']",
            lastName: "[name='lastName']",
            genericTest: ".oxd-input--active",
            buttonCloseData: ".--close",
            buttonSubmit: "[type='submit']",
            radioButton: ".oxd-select-text--arrow",
            optionAmerican: ":nth-child(5) > span",
            optionSingle: ".oxd-select-dropdown > :nth-child(2)"
        }

        return selectors
    }

    formName(first, middle, last) {
        cy.get(this.selectorList().firstName).clear().type(first)
        cy.get(this.selectorList().middleName).clear().type(middle)
        cy.get(this.selectorList().lastName).clear().type(last)

    }

    genericTest() {
        cy.get(this.selectorList().genericTest).eq(3).clear().type('employtest')
        cy.get(this.selectorList().genericTest).eq(4).clear().type('otherTest')
        cy.get(this.selectorList().genericTest).eq(5).clear().type('driveTest')
        cy.get(this.selectorList().genericTest).eq(6).clear().type('2024-29-11')
    }

    buttonClose() {
        cy.get(this.selectorList().buttonCloseData).click()
    }

    radioButton(){
        cy.get(this.selectorList().radioButton).eq(1).click()
        cy.get(this.selectorList().optionSingle).click()

    }

    submitButton(){
        cy.get(this.selectorList().buttonSubmit).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
}

export default myInfoPage