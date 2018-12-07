import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarClientComponent } from './toolbar-client.component';

describe('ToolbarClientComponent', () => {
  let component: ToolbarClientComponent;
  let fixture: ComponentFixture<ToolbarClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
