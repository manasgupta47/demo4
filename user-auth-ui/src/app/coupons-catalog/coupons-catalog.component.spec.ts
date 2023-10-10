import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsCatalogComponent } from './coupons-catalog.component';

describe('CouponsCatalogComponent', () => {
  let component: CouponsCatalogComponent;
  let fixture: ComponentFixture<CouponsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponsCatalogComponent]
    });
    fixture = TestBed.createComponent(CouponsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
