import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryToAdminComponent } from './order-history-to-admin.component';

describe('OrderHistoryToAdminComponent', () => {
  let component: OrderHistoryToAdminComponent;
  let fixture: ComponentFixture<OrderHistoryToAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderHistoryToAdminComponent]
    });
    fixture = TestBed.createComponent(OrderHistoryToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
