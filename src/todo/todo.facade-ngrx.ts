import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from './state-ngrx-store/todo.state';
import { TodoFacadeInterface } from './todo-facade.interface';
import { TodoService } from './todo.service';
import * as Selectors from './state-ngrx-store/todo.selectors';

@Injectable()
export class TodoFacadeNgrx implements TodoFacadeInterface {
  todosCompleted$ = this.store.select(Selectors.selectTodosCompleted);
  todosNotCompleted$ = this.store.select(Selectors.selectTodosNotCompleted);

  constructor(private store: Store<TodoState>, private service: TodoService) {}

  loadTodos(): void {
    throw new Error('Method not implemented.');
  }
  setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    throw new Error('Method not implemented.');
  }
  addTodo(title: string): void {
    throw new Error('Method not implemented.');
  }
  removeTodo(todoId: number): void {
    throw new Error('Method not implemented.');
  }
}
