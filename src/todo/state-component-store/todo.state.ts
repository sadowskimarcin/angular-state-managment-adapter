import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { TodoModel } from '../model/todo.model';

export interface TodoStateType {
  todos: TodoModel[];
}

@Injectable()
export class TodoState extends ComponentStore<TodoStateType> {
  constructor() {
    super({
      todos: []
    });
  }

  readonly todosCompleted$: Observable<TodoModel[]> = this.select(state =>
    state.todos.filter(todo => todo.isCompleted)
  );

  readonly todosNotCompleted$: Observable<TodoModel[]> = this.select(state =>
    state.todos.filter(todo => !todo.isCompleted)
  );

  public setTodos(todos: TodoModel[]): void {
    this.setState({
      todos
    });
  }

  readonly addTodo = this.updater((state, todo: TodoModel) => ({
    todos: [...state.todos, todo]
  }));

  public setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    this.patchState({
      todos: this.get().todos.map(todo => {
        if (todo.id === todoId) {
          todo.isCompleted = isCompleted;
        }
        return todo;
      })
    });
  }

  public removeTodo(todoId: number): void {
    this.patchState({
      todos: this.get().todos.filter(todo => todo.id !== todoId)
    });
  }
}
