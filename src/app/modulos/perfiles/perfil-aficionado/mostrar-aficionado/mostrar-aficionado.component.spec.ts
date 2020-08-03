import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAficionadoComponent } from './mostrar-aficionado.component';

describe('MostrarAficionadoComponent', () => {
  let component: MostrarAficionadoComponent;
  let fixture: ComponentFixture<MostrarAficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
