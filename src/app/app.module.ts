import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks.component';
import { DepartmentsComponent } from './components/departments.component';
import { EmployeesComponent } from './components/employees.component';
import { TasksDetailComponent } from './components/tasks-detail/tasks-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AppRoutesModule } from './routes.module';
import { DepartmentsDetailComponent } from './components/departments-detail/departments-detail.component';
import { CalendarComponent } from './calendar/calendar.component';

import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentFilterPipe } from './pipes/department-filter.pipe';
import { TaskFilterPipe } from './pipes/task-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    DepartmentsComponent,
    EmployeesComponent,
    TasksDetailComponent,
    DepartmentsDetailComponent,
    DashboardComponent,
    CalendarComponent,
    DepartmentFilterPipe,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class PizzaPartyAppModule { }