import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSettingsComponent } from './provider-settings.component';

describe('ProviderSettingsComponent', () => {
  let component: ProviderSettingsComponent;
  let fixture: ComponentFixture<ProviderSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
