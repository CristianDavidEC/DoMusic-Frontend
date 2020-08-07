import { TestBed } from '@angular/core/testing';

import { AutAficionadoGuard } from './aut-aficionado.guard';

describe('AutAficionadoGuard', () => {
  let guard: AutAficionadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutAficionadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
