import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAficionadoComponent } from './modificar-aficionado.component';

describe('ModificarAficionadoComponent', () => {
  let component: ModificarAficionadoComponent;
  let fixture: ComponentFixture<ModificarAficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
