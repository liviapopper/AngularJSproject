import { Component, OnInit } from '@angular/core'

import { Task } from '../task';
import { Department } from '../department';
import { Employee } from '../employee';

import { TasksService } from '../services/tasksService';
import { EmployeeService } from '../services/employee.service';
import { DepartmentsService } from '../services/department.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    
    title = 'Tasks';
    tasks: Task[];
    selectedTask: Task;
    departments: Department[];
    employees: Employee[];
  
    constructor(
        public tasksService: TasksService, 
        private employeeService: EmployeeService,
        private departmentService: DepartmentsService
      ) { }
 
    ngOnInit() {
        this.getDepartments()
        this.getEmployees()
        this.fetchTasks()
    }

  fetchTasks() {
      this.tasksService.fetchTasks()
        .subscribe(tasks => this.tasks = tasks)

      this.tasks.forEach(t => {
        t.empName = this.employeeService.getEmployeeById(t.empId).name
        // t.empIds.forEach(id =>{
        //   t.empNames.push(this.employeeService.getEmployeeById(id).name)
        // })
      })

      this.tasks.forEach(t => {
        t.depName = this.departmentService.getDepartmentById(t.depId).name
      }) 
    }

  createTask(taskName: string, empName: string, depName: string, startDate: Date, dueDate : Date) {
    let newTask = new Task();
    newTask.name = taskName;
    newTask.depName = depName;
    newTask.empName = empName;
    newTask.startDate = startDate;
    newTask.dueDate = dueDate;
    //newTask.depId = depId;
    //newTask.empIds = empIds;

    if (this.tasks.length != 0) {
      newTask.id = this.tasks[this.tasks.length - 1].id + 1;
    } else {
      newTask.id = 1;
    }
    
    if (newTask.name != '') {
      this.tasksService.createTask(newTask);
    }
  } 

  completeTask(event){
    this.selectedTask = null;
  }
  
  deleteTask(task: Task) {
    this.tasksService.deleteTask(task);
    this.selectedTask = null;
  }

  onSelect(task: Task): void {
        this.selectedTask = task;
  }

  getDepartments(): void {
    this.departmentService.fetchDepartments()
      .subscribe(departments => this.departments = departments)
  }

  getEmployees(): void{
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees)
  }
}