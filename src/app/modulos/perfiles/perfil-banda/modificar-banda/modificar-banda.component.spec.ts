import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBandaComponent } from './modificar-banda.component';

describe('ModificarBandaComponent', () => {
  let component: ModificarBandaComponent;
  let fixture: ComponentFixture<ModificarBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
