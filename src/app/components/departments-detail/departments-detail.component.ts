import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { Department } from '../../department';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import {DepartmentsService} from '../../services/department.service';

@Component({
  selector: 'app-departments-detail',
  templateUrl: './departments-detail.component.html'
})
export class DepartmentsDetailComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
    
  }
  
  @Input() department: Department;
}