import { Injectable } from '@angular/core';
import { TodoFacadeInterface } from './todo-facade.interface';
import { TodoService } from './todo.service';
import { TodoState } from './state-component-store/todo.state';

@Injectable()
export class TodoFacadeComponentStore implements TodoFacadeInterface {
  todosCompleted$ = this.state.todosCompleted$;
  todosNotCompleted$ = this.state.todosNotCompleted$;

  constructor(private state: TodoState, private service: TodoService) {}

  public loadTodos(): void {
    this.service.getTodos().subscribe(todos => {
      this.state.setTodos(todos);
    });
  }

  public setTodoIsCompleted(todoId: number, isCompleted: boolean): void {
    this.state.setTodoIsCompleted(todoId, isCompleted);
  }

  public addTodo(title: string): void {
    this.service
      .addTodo({
        id: null,
        title,
        isCompleted: false
      })
      .subscribe(todo => {
        this.state.addTodo(todo);
      });
  }

  public removeTodo(todoId: number): void {
    this.service.removeTodo(todoId).subscribe(() => {
      this.state.removeTodo(todoId);
    });
  }
}
