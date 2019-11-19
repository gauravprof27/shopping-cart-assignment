import { TestBed } from '@angular/core/testing';

import { ApplicationStateManagementService } from './application-state-management.service';

describe('ApplicationStateManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationStateManagementService = TestBed.get(ApplicationStateManagementService);
    expect(service).toBeTruthy();
  });
});
