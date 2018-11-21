import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientJobsComponent } from './client-jobs.component';

describe('ClientJobsComponent', () => {
  let component: ClientJobsComponent;
  let fixture: ComponentFixture<ClientJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
