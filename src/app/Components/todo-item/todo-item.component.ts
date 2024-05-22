import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  
  @Input() todo: Todo;
  @Input() i:number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() checkit:EventEmitter<Todo>=new EventEmitter();

  onClick(todo:Todo){
    this.todoDelete.emit(todo);
  }

  onCheck(todo:Todo){
    
    this.checkit.emit(todo)
  }
  


  constructor() {
    this.todo = new Todo(); // Initialize todo in the constructor
    this.i=0
  }
  

}
