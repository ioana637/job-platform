import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticiLeftComponent } from './statistici-left.component';

describe('StatisticiLeftComponent', () => {
  let component: StatisticiLeftComponent;
  let fixture: ComponentFixture<StatisticiLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticiLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticiLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
