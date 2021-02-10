import { TestBed } from '@angular/core/testing';

import { YoumaylikeService } from './youmaylike.service';

describe('YoumaylikeService', () => {
  let service: YoumaylikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoumaylikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
