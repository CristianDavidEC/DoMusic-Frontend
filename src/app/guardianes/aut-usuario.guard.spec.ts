import { TestBed } from '@angular/core/testing';

import { AutUsuarioGuard } from './aut-usuario.guard';

describe('AutUsuarioGuard', () => {
  let guard: AutUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
