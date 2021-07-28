import { Injectable } from '@angular/core';
import { TodoStateAdapter } from './todo-state.adapter';
import * as Actions from './state-manager/todo.actions';
import * as Selectors from './state-manager/todo.selectors';
import { TodoService } from './todo.service';

@Injectable()
export class TodoFacadeSm {
  public todosAll$ = this.stateAdapter.select(Selectors.selectTodos$());
  public todosCompleted$ = this.stateAdapter.select(
    Selectors.selectTodosCompleted$()
  );
  public todosNotCompleted$ = this.stateAdapter.select(
    Selectors.selectTodosNotCompleted$()
  );

  constructor(
    private stateAdapter: TodoStateAdapter,
    private service: TodoService
  ) {}

  public loadTodos(): void {
    this.service.getTodos().subscribe(todos => {
      this.stateAdapter.action(Actions.setTodos, todos);
    });
  }

  public setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    this.stateAdapter.action(Actions.setTodoIsCompleted, todoId, isCompleted);
  }

  public addTodo(title: string): void {
    this.service
      .addTodo({
        id: null,
        title,
        isCompleted: false
      })
      .subscribe(todo => {
        this.stateAdapter.action(Actions.addTodo, todo);
      });
  }

  public removeTodo(todoId: number): void {
    this.service.removeTodo(todoId).subscribe(() => {
      this.stateAdapter.action(Actions.removeTodo, todoId);
    });
  }
}
