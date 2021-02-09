import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsQuickviewComponent } from './productdetails-quickview.component';

describe('ProductdetailsQuickviewComponent', () => {
  let component: ProductdetailsQuickviewComponent;
  let fixture: ComponentFixture<ProductdetailsQuickviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsQuickviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsQuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
