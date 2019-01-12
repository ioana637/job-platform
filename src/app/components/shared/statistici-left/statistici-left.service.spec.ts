import { TestBed, inject } from '@angular/core/testing';

import { StatisticiLeftService } from './statistici-left.service';

describe('StatisticiLeftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatisticiLeftService]
    });
  });

  it('should be created', inject([StatisticiLeftService], (service: StatisticiLeftService) => {
    expect(service).toBeTruthy();
  }));
});
