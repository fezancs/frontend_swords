import { TestBed } from '@angular/core/testing';

import { HomesliderService } from './homeslider.service';

describe('HomesliderService', () => {
  let service: HomesliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
