import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoStateAdapter } from './todo-state.adapter';
import { TodoState } from './state-manager/todo.state';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFacadeSm } from './todo.facade-sm';
import { TodoFacadeNgrx } from './todo.facade-ngrx';
import { StoreModule } from '@ngrx/store';
import { todosReducers } from './state-ngrx-store/todo.reducers';
import { TODO_FEATURE_KEY } from './state-ngrx-store/todo.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TODO_FEATURE_KEY, todosReducers)
  ],
  declarations: [TodoListComponent],
  providers: [
    TodoFacadeSm,
    TodoFacadeNgrx,
    TodoStateAdapter,
    TodoState,
    TodoService
  ],
  exports: [TodoListComponent]
})
export class TodoModule {}
