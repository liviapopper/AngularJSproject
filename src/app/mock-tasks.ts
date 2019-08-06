import { Task } from './task';

export const TASKS: Task[] = [ 
    {id: 1, name: 'Homework', startDate: new Date, dueDate: new Date, depId: 2, depName: "", empId: 3, empName: ""},
    {id: 2, name: 'Make dinner', startDate: new Date, dueDate: new Date, depId: 3, depName: "", empId: 4, empName: ""},
    {id: 3, name: 'Drink beer', startDate: new Date,  dueDate: new Date, depId: 4, depName: "", empId: 5, empName: ""},
    {id: 4, name: 'Do laundry', startDate: new Date,  dueDate: new Date, depId: 1, depName: "", empId: 1, empName: ""}
];