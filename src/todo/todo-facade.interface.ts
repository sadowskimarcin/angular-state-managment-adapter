import { Observable } from 'rxjs';
import { TodoModel } from './model/todo.model';

export interface TodoFacadeInterface {
  todosCompleted$: Observable<TodoModel[]>;
  todosNotCompleted$: Observable<TodoModel[]>;

  loadTodos(): void;
  setTodoIsCompleted(todoId: number, isCompleted: boolean): void;
  addTodo(title: string): void;
  removeTodo(todoId: number): void;
}
