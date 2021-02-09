import { TestBed } from '@angular/core/testing';

import { RelatesProductsService } from './relates-products.service';

describe('RelatesProductsService', () => {
  let service: RelatesProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelatesProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
