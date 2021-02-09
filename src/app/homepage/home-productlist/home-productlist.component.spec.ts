import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductlistComponent } from './home-productlist.component';

describe('HomeProductlistComponent', () => {
  let component: HomeProductlistComponent;
  let fixture: ComponentFixture<HomeProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
