import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoumaylikeComponent } from './youmaylike.component';

describe('YoumaylikeComponent', () => {
  let component: YoumaylikeComponent;
  let fixture: ComponentFixture<YoumaylikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoumaylikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoumaylikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
