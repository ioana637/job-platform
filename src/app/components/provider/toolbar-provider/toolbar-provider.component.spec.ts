import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarProviderComponent } from './toolbar-provider.component';

describe('ToolbarProviderComponent', () => {
  let component: ToolbarProviderComponent;
  let fixture: ComponentFixture<ToolbarProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
