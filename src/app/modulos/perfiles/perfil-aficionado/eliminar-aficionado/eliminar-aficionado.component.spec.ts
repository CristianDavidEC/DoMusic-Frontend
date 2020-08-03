import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAficionadoComponent } from './eliminar-aficionado.component';

describe('EliminarAficionadoComponent', () => {
  let component: EliminarAficionadoComponent;
  let fixture: ComponentFixture<EliminarAficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
