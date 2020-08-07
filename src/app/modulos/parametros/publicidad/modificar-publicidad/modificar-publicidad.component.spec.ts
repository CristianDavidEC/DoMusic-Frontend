import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPublicidadComponent } from './modificar-publicidad.component';

describe('ModificarPublicidadComponent', () => {
  let component: ModificarPublicidadComponent;
  let fixture: ComponentFixture<ModificarPublicidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPublicidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
