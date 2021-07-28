import { Injectable } from '@angular/core';
import { TodoState } from './state-manager/todo.state';

export interface TodoStateType {
  todos: TodoModel[];
}

@Injectable()
export class TodoStateAdapter {
  constructor(private state: TodoState) {}

  public select: StateSelect<StateType> = selectPipe => {
    return this.state.select(selectPipe);
  };

  public action: StateAction<StateType> = (action, ...actionArgs) => {
    this.state.action(action, actionArgs);
  };
}
