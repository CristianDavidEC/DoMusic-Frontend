import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDenunciaComponent } from './eliminar-denuncia.component';

describe('EliminarDenunciaComponent', () => {
  let component: EliminarDenunciaComponent;
  let fixture: ComponentFixture<EliminarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
