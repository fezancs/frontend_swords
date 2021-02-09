import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSalesComponent } from './hot-sales.component';

describe('HotSalesComponent', () => {
  let component: HotSalesComponent;
  let fixture: ComponentFixture<HotSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
