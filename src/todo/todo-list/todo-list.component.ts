import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoFacadeComponentStore } from '../todo.facade-component-store';
import { TodoFacadeNgrx } from '../todo.facade-ngrx';
import { TodoFacadeStateManager } from '../todo.facade-state-manager';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todosCompleted$ = this.facade.todosCompleted$;
  public todosNotCompleted$ = this.facade.todosNotCompleted$;
  public form: FormGroup;

  constructor(
    // private facade: TodoFacadeStateManager,
    // private facade: TodoFacadeNgrx,
    private facade: TodoFacadeComponentStore,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.facade.loadTodos();
  }

  public completeTodo(todoId: number): void {
    this.facade.setTodoIsCompleted(todoId, true);
  }

  public unCompleteTodo(todoId: number): void {
    this.facade.setTodoIsCompleted(todoId, false);
  }

  public addTodo(): void {
    const nameControl = this.form.get('title');

    this.facade.addTodo(nameControl.value);

    nameControl.setValue('');
  }

  public remove(todoId: number): void {
    this.facade.removeTodo(todoId);
  }
}
