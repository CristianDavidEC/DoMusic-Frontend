import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarGrupoComponent } from './mostrar-grupo.component';

describe('MostrarGrupoComponent', () => {
  let component: MostrarGrupoComponent;
  let fixture: ComponentFixture<MostrarGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
