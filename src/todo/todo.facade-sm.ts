import { Injectable } from '@angular/core';
import { TodoStateAdapter } from './todo-state.adapter';
import * as Actions from './state-manager/todo.actions';
import * as Selectors from './state-manager/todo.selectors';
import { TodoService } from './todo.service';
import { TodoFacadeInterface } from './todo-facade.interface';
import { TodoState } from './state-manager/todo.state';

@Injectable()
export class TodoFacadeSm implements TodoFacadeInterface {
  public todosCompleted$ = this.state.select(
    Selectors.selectTodosCompleted()
  );
  public todosNotCompleted$ = this.state.select(
    Selectors.selectTodosNotCompleted()
  );

  constructor(
    private state: TodoState,
    private service: TodoService
  ) {}

  public loadTodos(): void {
    this.service.getTodos().subscribe(todos => {
      this.state.action(Actions.setTodos, todos);
    });
  }

  public setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    this.state.action(Actions.setTodoIsCompleted, todoId, isCompleted);
  }

  public addTodo(title: string): void {
    this.service
      .addTodo({
        id: null,
        title,
        isCompleted: false
      })
      .subscribe(todo => {
        this.state.action(Actions.addTodo, todo);
      });
  }

  public removeTodo(todoId: number): void {
    this.service.removeTodo(todoId).subscribe(() => {
      this.state.action(Actions.removeTodo, todoId);
    });
  }
}
