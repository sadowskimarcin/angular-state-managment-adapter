import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { TodoModel } from '../model/todo.model';

export const TODO_FEATURE_KEY = 'todos-module';

export interface TodoState extends EntityState<TodoModel> {}

export const todosAdapter: EntityAdapter<TodoModel> = createEntityAdapter<
  TodoModel
>({
  selectId: todo => todo.id,
  sortComparer: (a, b) => (a.id > b.id ? 1 : 0)
  // sortComparer: (a, b) => a.name.localeCompare(b.name)
});
