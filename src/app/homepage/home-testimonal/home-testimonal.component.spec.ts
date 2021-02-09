import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimonalComponent } from './home-testimonal.component';

describe('HomeTestimonalComponent', () => {
  let component: HomeTestimonalComponent;
  let fixture: ComponentFixture<HomeTestimonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestimonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestimonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
