import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNotificacionComponent } from './mostrar-notificacion.component';

describe('MostrarNotificacionComponent', () => {
  let component: MostrarNotificacionComponent;
  let fixture: ComponentFixture<MostrarNotificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarNotificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
