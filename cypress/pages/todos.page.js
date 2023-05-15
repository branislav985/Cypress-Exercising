///<reference types = "cypress"/>

import TodosElements from "../elements/todos.elements"

const elementsTodos = new TodosElements();
const newItem = 'Find the key'



export default class TodosFunctionality{



    checkTheTitle(){
        cy.get(elementsTodos.TITLE_TODO).contains('todos').should('be.visible');
    }

    checkTheTitle1(){
        cy.get(elementsTodos.TITLE_TODO).invoke('text').should('equals', 'todos');
    }

    checkTheTitle2(){
        cy.get(elementsTodos.TITLE_TODO).invoke('text').then(($textTitle) => {
            expect('todos').to.equal('todos');
        })
    }

    checkTheTitle3(){
        cy.get(elementsTodos.TITLE_TODO).should('have.text', 'todos');
    }

    checkTheTitle4(){
        cy.get(elementsTodos.TITLE_TODO).then(($textTitle) => {
            expect($textTitle).to.have.text('todos');
        });
    }

    

    inputNewItemAndConfirmIncrement(){

        var numberOfItemsBeforeAdding
        var numberOfItemsAfterAdding

        cy.get(elementsTodos.UNORDER_LIST).find('.view').then(($list) => {
            numberOfItemsBeforeAdding = $list.length
            console.log(numberOfItemsBeforeAdding)
        })
        cy.get(elementsTodos.INPUT_FIELD)
            .type(newItem + '{enter}')

        cy.get(elementsTodos.UNORDER_LIST).find('.view').then(($list) => {
            numberOfItemsAfterAdding =  $list.length
            console.log(numberOfItemsAfterAdding)
            expect(numberOfItemsAfterAdding).to.equal(numberOfItemsBeforeAdding + 1)
        })
    }


    checkIfTheItemIsAdded(){
        cy.get(elementsTodos.UNORDER_LIST).find('.view').contains(newItem).should('be.visible')
    }

    checkIfTheItemIsAdded1(){
        cy.get(elementsTodos.UNORDER_LIST).find('.view').last().should('have.text', newItem)
    }

    checkIfTheNumberOfItemsIncrisesForOneAfterAdding(){
        cy.get
    }
}
