import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Todo } from './model/todo';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL=environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  //GET ALL
  public getAllTodos(): Observable <Todo[]> {
    return this.http
    .get(API_URL + '/todos')
    .pipe(map((response : any)  => {
      const todos = response.json();
      // return new Todo(response.json())
      return todos.map((todo : any) => new Todo(todo))
    }))
  }

  
  private handleError(error: Response | any){
    console.error('ApiService:handleError',error)
  }
}
