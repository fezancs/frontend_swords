import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsReviewComponent } from './productdetails-review.component';

describe('ProductdetailsReviewComponent', () => {
  let component: ProductdetailsReviewComponent;
  let fixture: ComponentFixture<ProductdetailsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
