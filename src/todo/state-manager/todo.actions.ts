import { StateManager } from '../../lib/state-manager/state-manager';
import { TodoModel } from '../model/todo.model';
import { TodoStateType } from '../todo-state.adapter';

export const setTodos = (
  state: StateManager<TodoStateType>,
  todos: TodoModel[]
): void => {
  state.updateState({ todos });
};

export const setTodoIsCompleted = (
  state: StateManager<TodoStateType>,
  todoId: number,
  isCompleted: boolean
): void => {
  state.updateState({
    todos: state.stateSnapshot.todos.map(todo => {
      if (todo.id === todoId) {
        todo.isCompleted = isCompleted;
      }
      return todo;
    })
  });
};

export const addTodo = (
  state: StateManager<TodoStateType>,
  todo: TodoModel
): void => {
  state.updateState({
    todos: [...state.stateSnapshot.todos, todo]
  });
};

export const removeTodo = (
  state: StateManager<TodoStateType>,
  todoId: number
): void => {
  state.updateState({
    todos: state.stateSnapshot.todos.filter(todo => todo.id !== todoId)
  });
};
