import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecomandariPrimiteComponent } from './lista-recomandari-primite.component';

describe('ListaRecomandariPrimiteComponent', () => {
  let component: ListaRecomandariPrimiteComponent;
  let fixture: ComponentFixture<ListaRecomandariPrimiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecomandariPrimiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecomandariPrimiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
