import { TestBed } from '@angular/core/testing';

import { DenunciasPService } from './denuncias-p.service';

describe('DenunciasPService', () => {
  let service: DenunciasPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DenunciasPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
