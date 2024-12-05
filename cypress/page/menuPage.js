class menuPage {
    selectorList() {
        const selector = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails'] [data-v-7b563373='']"
        }
        return selector
    }

    myInfoButton() {
        cy.get(this.selectorList().myInfoButton).click()

    }
}

export default menuPage