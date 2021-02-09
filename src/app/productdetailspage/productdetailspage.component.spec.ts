import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailspageComponent } from './productdetailspage.component';

describe('ProductdetailspageComponent', () => {
  let component: ProductdetailspageComponent;
  let fixture: ComponentFixture<ProductdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
