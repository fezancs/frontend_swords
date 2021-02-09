import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceorderpageComponent } from './placeorderpage.component';

describe('PlaceorderpageComponent', () => {
  let component: PlaceorderpageComponent;
  let fixture: ComponentFixture<PlaceorderpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceorderpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceorderpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
