import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrerDenunciaComponent } from './crer-denuncia.component';

describe('CrerDenunciaComponent', () => {
  let component: CrerDenunciaComponent;
  let fixture: ComponentFixture<CrerDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrerDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrerDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
