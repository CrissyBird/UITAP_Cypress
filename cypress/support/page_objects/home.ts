export class homeNavigation{

    dynamicTablesPage(){
        cy.get('a').contains('Dynamic Table').click()
    }

}

export const onHomePage = new homeNavigation()