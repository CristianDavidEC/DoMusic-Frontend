import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBandaComponent } from './mostrar-banda.component';

describe('MostrarBandaComponent', () => {
  let component: MostrarBandaComponent;
  let fixture: ComponentFixture<MostrarBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
