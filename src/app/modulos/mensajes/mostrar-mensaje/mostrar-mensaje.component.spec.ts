import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMensajeComponent } from './mostrar-mensaje.component';

describe('MostrarMensajeComponent', () => {
  let component: MostrarMensajeComponent;
  let fixture: ComponentFixture<MostrarMensajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMensajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
