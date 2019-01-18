import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewClientComponent } from './add-review-client.component';

describe('AddReviewClientComponent', () => {
  let component: AddReviewClientComponent;
  let fixture: ComponentFixture<AddReviewClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
