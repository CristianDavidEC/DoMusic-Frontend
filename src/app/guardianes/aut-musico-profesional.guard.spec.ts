import { TestBed } from '@angular/core/testing';

import { AutMusicoProfesionalGuard } from './aut-musico-profesional.guard';

describe('AutMusicoProfesionalGuard', () => {
  let guard: AutMusicoProfesionalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutMusicoProfesionalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
