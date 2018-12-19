import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandationAddComponent } from './recommandation-add.component';

describe('RecommandationAddComponent', () => {
  let component: RecommandationAddComponent;
  let fixture: ComponentFixture<RecommandationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommandationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
