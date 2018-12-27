import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomandariCardComponent } from './recomandari-card.component';

describe('RecomandariCardComponent', () => {
  let component: RecomandariCardComponent;
  let fixture: ComponentFixture<RecomandariCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomandariCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomandariCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
