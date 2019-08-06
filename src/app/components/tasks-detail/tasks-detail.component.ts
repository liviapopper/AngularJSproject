import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input} from '@angular/core';
import { Task } from '../../task';
import { Employee } from '../../employee'
import { Department } from '../../department'

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TasksService }  from '../../services/tasksService';
import { DepartmentsService }  from '../../services/department.service';
import { EmployeeService }  from '../../services/employee.service';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent implements OnInit {
  @Output() closeTask = new EventEmitter();
  tasks: Task[]
  employees: Employee[]
  departments: Department[]

  constructor(
    private tasksService: TasksService,
    private departmentService: DepartmentsService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getTasks()
    this.getDepartments()
    this.getEmployees()
  }

  saveTask(){
    this.closeTask.emit();
    console.log("eho")
  }

  getTasks(): void{
    this.tasksService.fetchTasks()
      .subscribe(tasks => this.tasks = tasks)
    }

  getDepartments(): void {
    this.departmentService.fetchDepartments()
      .subscribe(departments => this.departments = departments)
  }
  
  getEmployees(): void{
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees)
  }
  
  @Input() task: Task;
}