import { TestBed, inject } from '@angular/core/testing';

import { DepartmentsService } from './department.service';

describe('DepartmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentsService]
    });
  });

  it('should be created', inject([DepartmentsService], (service: DepartmentsService) => {
    expect(service).toBeTruthy();
  }));
})
