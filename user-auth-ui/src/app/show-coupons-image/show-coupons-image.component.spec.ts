import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCouponsImageComponent } from './show-coupons-image.component';

describe('ShowCouponsImageComponent', () => {
  let component: ShowCouponsImageComponent;
  let fixture: ComponentFixture<ShowCouponsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCouponsImageComponent]
    });
    fixture = TestBed.createComponent(ShowCouponsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
