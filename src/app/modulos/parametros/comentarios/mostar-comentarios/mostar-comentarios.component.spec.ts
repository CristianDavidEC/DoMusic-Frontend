import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostarComentariosComponent } from './mostar-comentarios.component';

describe('MostarComentariosComponent', () => {
  let component: MostarComentariosComponent;
  let fixture: ComponentFixture<MostarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
