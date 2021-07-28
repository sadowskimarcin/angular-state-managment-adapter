import { StateManager } from '../../lib/state-manager/state-manager';
import { TodoModel } from '../model/todo.model';
import { TodoStateType } from '../todo-state.adapter';

export const setTodos = (
  state: StateManager<TodoStateType>,
  todos: TodoModel[]
): void => {
  state.updateState({ todos });
};
