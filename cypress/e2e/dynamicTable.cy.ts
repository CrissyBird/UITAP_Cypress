/// <reference types="cypress" />
import { onHomePage } from "../support/page_objects/home"


describe ('Dynamic Table', () => {
    
    beforeEach('open page', () => {
        cy.openHomePage () 
    })

    it('locate firefox', () => {
        onHomePage.dynamicTablesPage()
        cy.openHomePage()
    })
})