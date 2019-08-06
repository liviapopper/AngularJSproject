import { Component, OnInit } from '@angular/core'

import { Employee } from '../../employee'
import { Department } from '../../department'
import { Task } from '../../task'

import { EmployeeService } from '../../services/employee.service'
import { DepartmentsService } from '../../services/department.service'
import { TasksService } from '../../services/tasksService'

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    
    tasks: Task[] = []
    employees: Employee[] = []
    departments: Department[] = []
    
    constructor(
        private tasksService: TasksService, 
        private employeeService: EmployeeService,
        private departmentService: DepartmentsService
    ){ }

    ngOnInit () {
        this.getTasks()
        this.getEmployees()
        this.getDepartments()
    }

    getTasks(){
        this.tasksService.fetchTasks()
            .subscribe(tasks => this.tasks = tasks.slice(0,4))
    }

    getEmployees(){
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees.slice(1,5))
    }

    getDepartments(){
        this.departmentService.fetchDepartments()
            .subscribe(departments => this.departments = departments.slice(0,4))
    }

}