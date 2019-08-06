import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './components/dashboard/dashboard.component'
import { EmployeesComponent } from './components/employees.component'
import { DepartmentsComponent } from './components/departments.component'
import { TasksComponent } from './components/tasks.component'

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'tasks', component: TasksComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutesModule { }