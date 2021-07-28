import { TodoModel } from '../model/todo.model';
import { TodoState } from './todo.state';

export const selectOnItemsChange$ = (): StateSelector<TodoState, TodoModel[]> =>
  pipe(
    pluck('todos'),
    distinctUntilChanged()
  );
