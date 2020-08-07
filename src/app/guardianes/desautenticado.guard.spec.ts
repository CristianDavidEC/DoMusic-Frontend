import { TestBed } from '@angular/core/testing';

import { DesautenticadoGuard } from './desautenticado.guard';

describe('DesautenticadoGuard', () => {
  let guard: DesautenticadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesautenticadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
