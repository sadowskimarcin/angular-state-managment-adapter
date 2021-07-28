import { Injectable } from '@angular/core';
import { TodoStateAdapter } from './todo-state.adapter';
import * as Actions from './state-manager/todo.actions';
import * as Selectors from './state-manager/todo.selectors';
import { TodoService } from './todo.service';

@Injectable()
export class TodoFacade {
  public todos$ = this.stateAdapter.select(Selectors.selectTodos$());

  constructor(
    private stateAdapter: TodoStateAdapter,
    private service: TodoService
  ) {}

  public loadTodos(): void {
    this.service.getTodos().subscribe(todos => {
      this.stateAdapter.action(Actions.setTodos, todos);
    });
  }
}
