import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFacade } from './todo.facade';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent],
  providers: [
    TodoFacade
  ]
})
export class TodoModule { }