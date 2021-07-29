import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoModuleState } from './todo-state.typings';
import { todosAdapter, TODO_FEATURE_KEY } from './todo.state';

export const getTodosModuleState = createFeatureSelector<TodoModuleState>(
  TODO_FEATURE_KEY
);

export const getTodoState = createSelector(
  getTodosModuleState,
  state => state.todos
);

const {
  selectAll: getAllTodos
  // selectTotal: getCountAllTodos,
  // selectEntities: getEntitiesTodos
} = todosAdapter.getSelectors(getTodoState);

export const selectAllTodos = createSelector(
  getTodoState,
  todosAdapter.getSelectors().selectAll
);

export const selectTodosCompleted = pipe(
  select(getAllTodos),
  map(todos => todos.filter(todo => todo.isCompleted))
);

export const selectTodosNotCompleted = pipe(
  select(getAllTodos),
  map(todos => todos.filter(todo => !todo.isCompleted))
);
