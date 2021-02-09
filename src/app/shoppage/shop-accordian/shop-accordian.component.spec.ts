import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAccordianComponent } from './shop-accordian.component';

describe('ShopAccordianComponent', () => {
  let component: ShopAccordianComponent;
  let fixture: ComponentFixture<ShopAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
