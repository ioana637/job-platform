import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewProviderComponent } from './add-review-provider.component';

describe('AddReviewProviderComponent', () => {
  let component: AddReviewProviderComponent;
  let fixture: ComponentFixture<AddReviewProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
