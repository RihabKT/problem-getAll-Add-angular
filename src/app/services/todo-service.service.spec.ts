import { inject,TestBed } from '@angular/core/testing';
import { Todo } from '../model/todo';

import { TodoServiceService } from './todo-service.service';

describe('TodoServiceService', () => {
  let service: TodoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return all todos',inject([TodoServiceService], (service:TodoServiceService)=>{
    let todo1 = new Todo({title:"FIRST",description:"Wake Up Early"})
    let todo2 = new Todo({title:"SECOND",description:"Review Calender Schedules"})
    service.addTodo(todo1)
    service.addTodo(todo2)
    expect(service.getAllTodos()).toEqual([todo1,todo2])
  }))
});
