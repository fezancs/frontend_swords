import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsAccordianComponent } from './productdetails-accordian.component';

describe('ProductdetailsAccordianComponent', () => {
  let component: ProductdetailsAccordianComponent;
  let fixture: ComponentFixture<ProductdetailsAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
