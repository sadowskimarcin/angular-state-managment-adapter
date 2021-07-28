import { Injectable } from '@angular/core';
import { TodoStateAdapter } from './todo-state.adapter';
import * as Actions from '../state-manager/todo.actions';

@Injectable()
export class TodoFacade {
  public todos$ = this.stateAdapter.select();

  constructor(
    private stateAdapter: TodoStateAdapter
  ) {}

  public loadTodos(): void {
    this.stateAdapter.action()

  }
}
