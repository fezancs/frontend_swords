import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsTableComponent } from './productdetails-table.component';

describe('ProductdetailsTableComponent', () => {
  let component: ProductdetailsTableComponent;
  let fixture: ComponentFixture<ProductdetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
