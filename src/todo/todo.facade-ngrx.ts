import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from './state-ngrx-store/todo.state';
import { TodoFacadeInterface } from './todo-facade.interface';
import { TodoService } from './todo.service';
import * as Selectors from './state-ngrx-store/todo.selectors';
import * as Actions from './state-ngrx-store/todo.actions';

@Injectable()
export class TodoFacadeNgrx implements TodoFacadeInterface {
  todosCompleted$ = this.state.pipe(Selectors.selectTodosCompleted);
  todosNotCompleted$ = this.state.pipe(Selectors.selectTodosNotCompleted);

  constructor(private state: Store<TodoState>, private service: TodoService) {}

  public loadTodos(): void {
    this.service.getTodos().subscribe(todos => {
      this.state.dispatch(Actions.setTodos({ todos }));
    });
  }

  public setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    this.state.dispatch(
      Actions.updateTodo({
        update: {
          id: todoId,
          changes: {
            isCompleted
          }
        }
      })
    );
  }

  public addTodo(title: string): void {
    this.service
      .addTodo({
        id: null,
        title,
        isCompleted: false
      })
      .subscribe(todo => {
        this.state.dispatch(Actions.addTodo({ todo }));
      });
  }

  public removeTodo(todoId: number): void {
    this.service.removeTodo(todoId).subscribe(() => {
      this.state.dispatch(Actions.deleteTodo({ id: todoId }));
    });
  }
}
