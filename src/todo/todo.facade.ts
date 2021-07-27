import { Injectable } from '@angular/core';
import { TodoStateAdapter } from './todo-state.adapter';

@Injectable()
export class TodoFacade {
  public todos$ = this.stateAdapter.select();

  constructor(
    private stateAdapter: TodoStateAdapter
  ) {}

  public loadTodos(): void {
    
  }
}
