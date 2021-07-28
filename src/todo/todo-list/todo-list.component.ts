import { Component, OnInit } from '@angular/core';
import { TodoFacade } from '../todo.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos$ = this.facade.todos$;

  constructor(private facade: TodoFacade) {}

  ngOnInit() {
    this.facade.loadTodos();
  }
}
