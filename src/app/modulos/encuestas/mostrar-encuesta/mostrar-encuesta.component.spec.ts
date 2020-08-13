import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarEncuestaComponent } from './mostrar-encuesta.component';

describe('MostrarEncuestaComponent', () => {
  let component: MostrarEncuestaComponent;
  let fixture: ComponentFixture<MostrarEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
