///<reference types = "cypress"/>

import TodosFunctionality from "../pages/todos.page"

const todosPage = new TodosFunctionality();

describe('Testing basic todos functipnality', () => {

    beforeEach('Go to todos page', () => {
        cy.visit("/todo")
    })

    it('Check the title', () => {
        todosPage.checkTheTitle();
        todosPage.checkTheTitle1();
        todosPage.checkTheTitle2();
        todosPage.checkTheTitle3();
        todosPage.checkTheTitle4();
        todosPage.inputNewItemAndConfirmIncrement();
        todosPage.checkIfTheItemIsAdded();
        todosPage.checkIfTheItemIsAdded1();
    })
})