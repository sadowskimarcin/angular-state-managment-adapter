import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFacade } from './todo.facade';
import { TodoStateAdapter } from './todo-state.adapter';
import { TodoState } from './state-manager/todo.state';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: [TodoListComponent],
  providers: [TodoFacade, TodoStateAdapter, TodoState, TodoService],
  exports: [TodoListComponent]
})
export class TodoModule {}
