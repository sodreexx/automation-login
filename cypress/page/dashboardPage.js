class dashboardPage {

     selectorList() {
        const selectorList = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }
        return selectorList
     }

     verificationUrl() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index' )
        cy.get(this.selectorList().dashboardGrid)
     }
    
     

     

}

export default dashboardPage