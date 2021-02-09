import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewarrivalsComponent } from './home-newarrivals.component';

describe('HomeNewarrivalsComponent', () => {
  let component: HomeNewarrivalsComponent;
  let fixture: ComponentFixture<HomeNewarrivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNewarrivalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewarrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
