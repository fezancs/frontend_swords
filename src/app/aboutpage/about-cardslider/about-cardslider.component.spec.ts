import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardsliderComponent } from './about-cardslider.component';

describe('AboutCardsliderComponent', () => {
  let component: AboutCardsliderComponent;
  let fixture: ComponentFixture<AboutCardsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCardsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCardsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
