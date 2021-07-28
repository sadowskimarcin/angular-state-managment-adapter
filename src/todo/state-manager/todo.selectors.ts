import { StateSelector } from '../../lib/state-manager/state-manager.typings';
import { TodoModel } from '../model/todo.model';
import { TodoStateType } from '../todo-state.adapter';
import { pipe, map, pluck, distinctUntilChanged } from 'rxjs';

export const selectTodos$ = (): StateSelector<TodoStateType, TodoModel[]> =>
  pipe(
    pluck('todos'),
    distinctUntilChanged()
  );

export const selectTodosCompleted$ = (): StateSelector<
  TodoStateType,
  TodoModel[]
> =>
  pipe(
    selectTodos$(),
    map(todos => todos.filter(todo => todo.isCompleted))
  );

export const selectTodosNotCompleted$ = (): StateSelector<
  TodoStateType,
  TodoModel[]
> =>
  pipe(
    selectTodos$(),
    map(todos => todos.filter(todo => !todo.isCompleted))
  );
