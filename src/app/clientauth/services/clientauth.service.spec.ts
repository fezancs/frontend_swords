import { TestBed } from '@angular/core/testing';

import { ClientauthService } from './clientauth.service';

describe('ClientauthService', () => {
  let service: ClientauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
