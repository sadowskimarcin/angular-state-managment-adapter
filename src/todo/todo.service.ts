import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from './model/todo.model';

@Injectable()
export class HeroService {
  private apiUrl = 'https://60e2b8149103bd0017b474cc.mockapi.io/todo';

  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.apiUrl);
  }

  public addHero(hero: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(this.apiUrl, {
      ...hero
    });
  }

  public updateHero(hero: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(this.apiUrl + '/' + hero.id, {
      title: hero.title
    });
  }

  public removeHero(hero: TodoModel): Observable<TodoModel> {
    return this.http.delete<TodoModel>(this.apiUrl + '/' + hero.id);
  }
}
