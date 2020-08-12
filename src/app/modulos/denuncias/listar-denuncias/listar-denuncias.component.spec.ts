import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDenunciasComponent } from './listar-denuncias.component';

describe('ListarDenunciasComponent', () => {
  let component: ListarDenunciasComponent;
  let fixture: ComponentFixture<ListarDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
