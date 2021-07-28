import { StateSelector } from '../../lib/state-manager/state-manager.typings';
import { TodoModel } from '../model/todo.model';
import { TodoStateType } from '../todo-state.adapter';
import { pipe } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs';

export const selectTodos$ = (): StateSelector<TodoStateType, TodoModel[]> =>
  pipe(
    pluck('todos'),
    distinctUntilChanged()
  );
