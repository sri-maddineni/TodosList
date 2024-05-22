import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {



  todos: Todo[];
  localitem: string | null;



  constructor() {
    this.todos = []
    this.localitem = localStorage.getItem("todosharry");
    if (this.localitem === null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localitem)
    }
  }



  deleteTodo(todo: Todo) {
    console.log(todo)
    console.log("hello todo delete function")
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem("todosharry", JSON.stringify(this.todos))

  }

  addTodo(todo: Todo) {
    console.log(todo)
    console.log("hello todo add function")

    this.todos.push(todo)
    localStorage.setItem("todosharry", JSON.stringify(this.todos))


  }

  checkit(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos[index].done = !this.todos[index].done;
      localStorage.setItem("todosharry", JSON.stringify(this.todos));
    }
  }


}
