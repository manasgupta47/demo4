import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCouponsToAdminComponent } from './show-coupons-to-admin.component';

describe('ShowCouponsToAdminComponent', () => {
  let component: ShowCouponsToAdminComponent;
  let fixture: ComponentFixture<ShowCouponsToAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCouponsToAdminComponent]
    });
    fixture = TestBed.createComponent(ShowCouponsToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
