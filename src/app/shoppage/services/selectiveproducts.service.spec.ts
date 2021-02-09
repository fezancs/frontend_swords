import { TestBed } from '@angular/core/testing';

import { SelectiveproductsService } from './selectiveproducts.service';

describe('SelectiveproductsService', () => {
  let service: SelectiveproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectiveproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
