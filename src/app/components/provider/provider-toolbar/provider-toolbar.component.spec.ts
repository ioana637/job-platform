import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderToolbarComponent } from './provider-toolbar.component';

describe('ProviderToolbarComponent', () => {
  let component: ProviderToolbarComponent;
  let fixture: ComponentFixture<ProviderToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
