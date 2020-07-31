import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDenunciaComponent } from './crear-denuncia.component';

describe('CrearDenunciaComponent', () => {
  let component: CrearDenunciaComponent;
  let fixture: ComponentFixture<CrearDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
