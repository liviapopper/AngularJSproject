import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title = 'Employees';
  employees: Employee[];

selectedEmployee: Employee;

onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
}

add(name: string, tel: string, doh: string): void {
  name = name.trim();
  if (!name) { return; }
  let id:number;
  if (this.employees.length != 0) {
    id = this.employees[this.employees.length - 1].id + 1;
  } else {
    id = 1;
  }
  let newEmployee = new Employee(id, name, tel, doh);
  this.employeeService.addEmployee(newEmployee).subscribe(employee => { this.employees.push(employee); });
}

getEmployees(): void {
  this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees)
}

delete(employee: Employee): void {
  this.employees = this.employees.filter(e => e !== employee);
  this.employeeService.deleteEmployee(employee).subscribe();
}

  constructor(private employeeService: EmployeeService) {  }

  ngOnInit() {
    this.getEmployees();
  }
}