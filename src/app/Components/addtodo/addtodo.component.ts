import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent {

  title:string="";
  des:string="";

  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();



  onSubmit(){
    const todo={
      title:this.title,
      des:this.des,
      done:false
    }
    
      this.todoAdd.emit(todo);
    
  }

  

  ngOnInit(): void {
      
  }

}
