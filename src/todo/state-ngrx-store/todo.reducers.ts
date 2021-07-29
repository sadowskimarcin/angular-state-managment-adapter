import { ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';
import { TodoModuleState } from './todo-state.typings';
import * as TodoActions from './todo.actions';
import { todosAdapter, TodoState } from './todo.state';

export const metaReducers: MetaReducer<TodoModuleState>[] = [];

const initialState: TodoState = todosAdapter.getInitialState({
  // additional entity state properties
});

export const todosReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) =>
    todosAdapter.addOne(todo, state)
  ),
  on(TodoActions.deleteTodo, (state, { id }) =>
    todosAdapter.removeOne(id, state)
  ),
  on(TodoActions.updateTodo, (state, { update }) =>
    todosAdapter.updateOne(update, state)
  ),
  on(TodoActions.setTodos, (state, { todos }) =>
    todosAdapter.setAll(todos, state)
  )
);

export const todosReducers: ActionReducerMap<TodoModuleState> = {
  todos: todosReducer
};
