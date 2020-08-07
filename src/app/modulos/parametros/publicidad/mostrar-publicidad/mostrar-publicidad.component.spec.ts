import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPublicidadComponent } from './mostrar-publicidad.component';

describe('MostrarPublicidadComponent', () => {
  let component: MostrarPublicidadComponent;
  let fixture: ComponentFixture<MostrarPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
