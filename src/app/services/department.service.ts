import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Department } from '../department';
import { DEPARTMENTS } from '../mock-departments';

@Injectable({
  providedIn: 'root',
})

export class DepartmentsService {

  constructor() { }

  fetchDepartments(): Observable<Department[]> {
    return of(DEPARTMENTS);
  }

  getDepartmentsById(depIds: number[]): Department {
    for (var i = 0; i < DEPARTMENTS.length; i++){
      for (var j = 0; j < depIds.length; j++) {
        if (DEPARTMENTS[i].id === depIds[j]) {
           return DEPARTMENTS[i]
        }
      }
    }
  }

  getDepartmentById(depId: number): Department {
    for(var i = 0; i <= DEPARTMENTS.length; i++){
      if(DEPARTMENTS[i].id === depId) {
        return DEPARTMENTS[i]
      } 
    }
  }

  createDepartment(department: Department): void {
    DEPARTMENTS.push(department);
  }

  deleteDepartment(department: Department): void {
    const indexOfDepartment = DEPARTMENTS.indexOf(department);
    DEPARTMENTS.splice(indexOfDepartment, 1);
  }
} 
