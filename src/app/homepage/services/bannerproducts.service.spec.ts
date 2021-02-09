import { TestBed } from '@angular/core/testing';

import { BannerproductsService } from './bannerproducts.service';

describe('BannerproductsService', () => {
  let service: BannerproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
