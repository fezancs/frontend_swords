import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsDescriptionboxComponent } from './productdetails-descriptionbox.component';

describe('ProductdetailsDescriptionboxComponent', () => {
  let component: ProductdetailsDescriptionboxComponent;
  let fixture: ComponentFixture<ProductdetailsDescriptionboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsDescriptionboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsDescriptionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
