import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDenunciasComponent } from './mostrar-denuncias.component';

describe('MostrarDenunciasComponent', () => {
  let component: MostrarDenunciasComponent;
  let fixture: ComponentFixture<MostrarDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
