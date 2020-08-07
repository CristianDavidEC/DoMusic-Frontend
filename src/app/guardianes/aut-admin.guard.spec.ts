import { TestBed } from '@angular/core/testing';

import { AutAdminGuard } from './aut-admin.guard';

describe('AutAdminGuard', () => {
  let guard: AutAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
