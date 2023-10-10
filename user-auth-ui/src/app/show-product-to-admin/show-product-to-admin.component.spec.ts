import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductToAdminComponent } from './show-product-to-admin.component';

describe('ShowProductToAdminComponent', () => {
  let component: ShowProductToAdminComponent;
  let fixture: ComponentFixture<ShowProductToAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductToAdminComponent]
    });
    fixture = TestBed.createComponent(ShowProductToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
