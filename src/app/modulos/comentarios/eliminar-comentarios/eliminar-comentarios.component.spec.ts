import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarComentariosComponent } from './eliminar-comentarios.component';

describe('EliminarComentariosComponent', () => {
  let component: EliminarComentariosComponent;
  let fixture: ComponentFixture<EliminarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
