import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdministradorComponent } from './crear-administrador.component';

describe('CrearAdministradorComponent', () => {
  let component: CrearAdministradorComponent;
  let fixture: ComponentFixture<CrearAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
