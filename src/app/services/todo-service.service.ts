import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  //todo1 : Todo={id:1,title:"FIRST",description:"wake up early"}
  //todo2 : Todo={id:2,title:"SECOND",description:"review calender schedule"}

  
//todos:Todo[]=[this.todo1,this.todo2]
todos:Todo[]=[]

lastId:number=0

  constructor() { }

  //POST (ADD)
  addTodo(todo:Todo){

    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;

  
  }
  //DELETE BY ID
  deleteTodoById(id:number){
    this.todos=this.todos.filter(todo =>todo.id !=id)
    return this
  }

  //GET ALL TODOS
  getAllTodos():Todo[]{
 return this.todos
  }

 //GET TODO BY ID
 getTodoById(id:number){
 return this.todos.filter(todo => todo.id===id).pop();
 }

 


  //PUT (UPDATE)
updateTodoById(id:number, values:Object ={}): Todo{
let todo = this.getTodoById(id)
if (!todo){
return null as any
}
Object.assign(todo,values)
return todo
}

}
