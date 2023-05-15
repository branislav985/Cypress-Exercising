///<reference types = "cypress"/>

import TodosFunctionallity from "../pages/todos.page"

const todosPage = new TodosFunctionallity();


describe('Testing basic todos functipnallity', () => {

    beforeEach('Go to todos page', () => {
        cy.visit("/todo")
    })

    
})