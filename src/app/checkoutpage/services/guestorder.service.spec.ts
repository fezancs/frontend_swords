import { TestBed } from '@angular/core/testing';

import { GuestorderService } from './guestorder.service';

describe('GuestorderService', () => {
  let service: GuestorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
