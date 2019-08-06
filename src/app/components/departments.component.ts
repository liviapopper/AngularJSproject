import { Component, OnInit } from '@angular/core';

import { Department } from '../department';
import {Employee} from '../employee';
import { Task } from '../task';

import {DepartmentsService} from '../services/department.service';
import {EmployeeService} from '../services/employee.service';
import { TasksService } from '../services/tasksService';


@Component({
    selector: 'departments',
    templateUrl: './departments.component.html',
    styleUrls: ['./departments.component.css']
})

export class DepartmentsComponent implements OnInit{
    
    title = 'Departments';
    departments: Department[];
    selectedDepartment: Department;
    employees: Employee[];
    constructor(
        public departmentsService: DepartmentsService,
        private employeeService: EmployeeService

      ) { }
 
    ngOnInit() {
        this.fetchDepartments();
        this.getEmployees();
    }

    fetchDepartments() {
      this.departmentsService.fetchDepartments()
        .subscribe(departments => this.departments = departments);

      this.departments.forEach(d => {
          d.empName = this.employeeService.getEmployeeById(d.empId).name
        })
  }

  createDepartment(departmentName: string, empName: string) {
    let newDepartment = new Department();
    newDepartment.id = this.departments.length + 1;
    newDepartment.name = departmentName;
    newDepartment.empName = empName;

    if (this.departments.length != 0) {
      newDepartment.id = this.departments[this.departments.length - 1].id + 1;
    } else {
      newDepartment.id = 1;
    }
    if (newDepartment.name != '') {
      this.departmentsService.createDepartment(newDepartment);
    }
  }
  
  deleteDepartment(department: Department) {
    this.departmentsService.deleteDepartment(department);
    this.selectedDepartment = null;
  }

  onSelect(department: Department): void {
        this.selectedDepartment = department;
  }

  getEmployees(): void{
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees)
  }

}