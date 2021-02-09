import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAccordianComponent } from './cart-accordian.component';

describe('CartAccordianComponent', () => {
  let component: CartAccordianComponent;
  let fixture: ComponentFixture<CartAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
