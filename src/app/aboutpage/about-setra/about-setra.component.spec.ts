import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSetraComponent } from './about-setra.component';

describe('AboutSetraComponent', () => {
  let component: AboutSetraComponent;
  let fixture: ComponentFixture<AboutSetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSetraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
