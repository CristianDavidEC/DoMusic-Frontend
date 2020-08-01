import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarComentariosComponent } from './modificar-comentarios.component';

describe('ModificarComentariosComponent', () => {
  let component: ModificarComentariosComponent;
  let fixture: ComponentFixture<ModificarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
