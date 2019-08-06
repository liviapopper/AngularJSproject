import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsDetailComponent } from './department-detail.component';

describe('DepartmentDetailComponent', () => {
  let component: DepartmentsDetailComponent;
  let fixture: ComponentFixture<DepartmentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
