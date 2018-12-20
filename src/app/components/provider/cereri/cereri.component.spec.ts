import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CereriComponent } from './cereri.component';

describe('CereriComponent', () => {
  let component: CereriComponent;
  let fixture: ComponentFixture<CereriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CereriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CereriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
