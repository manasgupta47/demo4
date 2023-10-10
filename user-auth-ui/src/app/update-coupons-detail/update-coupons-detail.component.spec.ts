import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCouponsDetailComponent } from './update-coupons-detail.component';

describe('UpdateCouponsDetailComponent', () => {
  let component: UpdateCouponsDetailComponent;
  let fixture: ComponentFixture<UpdateCouponsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCouponsDetailComponent]
    });
    fixture = TestBed.createComponent(UpdateCouponsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
