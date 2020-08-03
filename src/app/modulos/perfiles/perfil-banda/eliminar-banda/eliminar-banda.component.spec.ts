import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBandaComponent } from './eliminar-banda.component';

describe('EliminarBandaComponent', () => {
  let component: EliminarBandaComponent;
  let fixture: ComponentFixture<EliminarBandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarBandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
