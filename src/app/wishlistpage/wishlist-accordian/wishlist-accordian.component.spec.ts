import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistAccordianComponent } from './wishlist-accordian.component';

describe('WishlistAccordianComponent', () => {
  let component: WishlistAccordianComponent;
  let fixture: ComponentFixture<WishlistAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
