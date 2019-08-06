import { ModuleWithComponentFactories } from "@angular/core";

export class Task { 
    // constructor() {
    //     this.empNames = new Array<string>()
    // }

    id: number;
    name: string;
    depId: number;
    depName: string;
    empId: number;
    empName: string;
    startDate: Date;
    dueDate: Date;
}