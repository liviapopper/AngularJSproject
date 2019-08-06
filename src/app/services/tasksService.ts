import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from '../task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root',
})

export class TasksService {

  task: Task;

  constructor() { }

  fetchTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTasksById(taskIds: number): Task { 
    for (var i = 0; i < TASKS.length; i++){
        if (TASKS[i].id === taskIds) {
          return TASKS[i]
      }
    }
  }
  
  createTask(task: Task): void {
    TASKS.push(task)
  }

  deleteTask(task: Task): void {
    const indexOfTask = TASKS.indexOf(task)
    TASKS.splice(indexOfTask, 1)
  }
}