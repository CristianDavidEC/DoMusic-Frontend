import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAficionadoComponent } from './crear-aficionado.component';

describe('CrearAficionadoComponent', () => {
  let component: CrearAficionadoComponent;
  let fixture: ComponentFixture<CrearAficionadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAficionadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAficionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
