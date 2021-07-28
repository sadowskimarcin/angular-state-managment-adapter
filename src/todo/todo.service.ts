import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './model/todo.model';

@Injectable()
export class TodoService {
  private apiUrl = 'https://60e2b8149103bd0017b474cc.mockapi.io/todo';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  public addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.apiUrl, {
      ...todo
    });
  }

  public updateTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(this.apiUrl + '/' + todo.id, todo);
  }

  public removeTodo(todoId: number): Observable<TodoModel> {
    return this.http.delete<TodoModel>(this.apiUrl + '/' + todoId);
  }
}
