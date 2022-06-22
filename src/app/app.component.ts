import { Component } from '@angular/core';
import { TodoServiceService } from './services/todo-service.service';
import { Todo } from './model/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todotasks';
  todos: Todo[] = []
  newTodo:Todo = new Todo()
  constructor(private todoServiceService:TodoServiceService){}

  addTodo(){
    this.todoServiceService.addTodo(this.newTodo)
    this.newTodo = new Todo()
  }

  getTodos(){
    let tasks = this.todoServiceService.getAllTodos()
    return tasks 
  }

  deleteTodo(todo:any){
    this.todoServiceService.deleteTodoById(todo.id)
  }
}
