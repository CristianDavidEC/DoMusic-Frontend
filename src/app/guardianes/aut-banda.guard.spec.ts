import { TestBed } from '@angular/core/testing';

import { AutBandaGuard } from './aut-banda.guard';

describe('AutBandaGuard', () => {
  let guard: AutBandaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutBandaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
