import { TestBed } from '@angular/core/testing';

import { FilterallproductsService } from './filterallproducts.service';

describe('FilterallproductsService', () => {
  let service: FilterallproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterallproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
