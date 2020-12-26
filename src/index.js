// import {MakeTodo} from '/src/CreatingTodo.js'
import {ModalManipulation} from '/src/Modal.js'
import {AddTodoToArray} from '/src/AddTodoToArr.js'

let modal = new ModalManipulation()
let addTodoToArr = new AddTodoToArray()

modal.openModal()

const addTodoBtn = document.querySelector('.add-todo')

addTodoBtn.addEventListener('click', () => {
    addTodoToArr.writeToArray();
})
