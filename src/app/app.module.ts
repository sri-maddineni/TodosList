import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { AddtodoComponent } from './Components/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Routes/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddtodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
