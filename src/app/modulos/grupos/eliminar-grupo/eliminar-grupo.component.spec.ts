import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarGrupoComponent } from './eliminar-grupo.component';

describe('EliminarGrupoComponent', () => {
  let component: EliminarGrupoComponent;
  let fixture: ComponentFixture<EliminarGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
