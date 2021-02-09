import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientauthComponent } from './clientauth.component';

describe('ClientauthComponent', () => {
  let component: ClientauthComponent;
  let fixture: ComponentFixture<ClientauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientauthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
