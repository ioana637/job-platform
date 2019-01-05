import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSearchComponent } from './provider-search.component';

describe('ProviderSearchComponent', () => {
  let component: ProviderSearchComponent;
  let fixture: ComponentFixture<ProviderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
