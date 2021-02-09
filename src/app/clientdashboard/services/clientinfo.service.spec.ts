import { TestBed } from '@angular/core/testing';

import { ClientinfoService } from './clientinfo.service';

describe('ClientinfoService', () => {
  let service: ClientinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
