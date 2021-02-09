import { TestBed } from '@angular/core/testing';

import { NewslettersubscribersService } from './newslettersubscribers.service';

describe('NewslettersubscribersService', () => {
  let service: NewslettersubscribersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewslettersubscribersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
