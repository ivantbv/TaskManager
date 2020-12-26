import {MakeTodo} from '/src/CreatingTodo.js'

let myTodos = []

export class AddTodoToArray {
    constructor() {
        this.todoTitleInput = document.querySelector('#title')
        this.todoDescriptionInput = document.querySelector('#description')
        this.todoDate = document.querySelector('#dueDate')
        this.todoDate.valueAsDate = new Date();
        this.todoPriority = document.querySelectorAll('#priority option')
        //this.todoPriority = document.querySelectorAll('input[name="priority"]')
    }

    writeToArray() {
        const date = new Date(this.todoDate.value)
		const day = date.getUTCDate()
		const month = date.getUTCMonth() + 1;
		const year = date.getUTCFullYear()
        const fullDateFromInput = [`${minTwoDigits(day)}`, `${minTwoDigits(month)}`, year].join('-')
        
        let priorityValue;

         for (let prioritySelect of this.todoPriority) {
            if (prioritySelect.selected) {
                priorityValue = prioritySelect.value
            }
        };
        console.log(priorityValue);

        const todo = new MakeTodo(`${this.todoTitleInput.value}`, `${this.todoDescriptionInput.value}`, `${fullDateFromInput}`, `${priorityValue}`)
        myTodos.push(todo);
        console.log(myTodos);
    }
}

function minTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
  }