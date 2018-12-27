import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecomandariDateComponent } from './lista-recomandari-date.component';

describe('ListaRecomandariDateComponent', () => {
  let component: ListaRecomandariDateComponent;
  let fixture: ComponentFixture<ListaRecomandariDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRecomandariDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRecomandariDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
