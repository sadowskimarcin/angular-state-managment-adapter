import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFacade } from './todo.facade';
import { TodoStateAdapter } from './todo-state.adapter';
import { TodoState } from './state-manager/todo.state';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent],
  providers: [
    TodoFacade,
    TodoStateAdapter,
    TodoState
  ]
})
export class TodoModule { }