import { TodoModel } from '../model/todo.model';
import { TodoState } from './todo.state';

export const setTodos = (state: StateManager<TodoState>, todos: TodoModel[]): void => {
  state.updateState({ todos });
};
