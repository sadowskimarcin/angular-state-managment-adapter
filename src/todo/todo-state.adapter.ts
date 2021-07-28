import { Injectable } from '@angular/core';
import {
  StateAction,
  StateSelect
} from '../lib/state-manager/state-manager.typings';
import { TodoModel } from './model/todo.model';
import { TodoState } from './state-manager/todo.state';

export interface TodoStateType {
  todos: TodoModel[];
}

@Injectable()
export class TodoStateAdapter {
  constructor(private state: TodoState) {}

  public select: StateSelect<TodoStateType> = selectPipe => {
    return this.state.select(selectPipe);
  };

  public action: StateAction<TodoStateType> = (action, ...actionArgs) => {
    this.state.action(action, actionArgs);
  };
}
