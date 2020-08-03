import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBandaComponent } from './crear-banda.component';

describe('CrearBandaComponent', () => {
  let component: CrearBandaComponent;
  let fixture: ComponentFixture<CrearBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
