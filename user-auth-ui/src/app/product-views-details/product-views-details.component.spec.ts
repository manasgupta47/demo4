import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewsDetailsComponent } from './product-views-details.component';

describe('ProductViewsDetailsComponent', () => {
  let component: ProductViewsDetailsComponent;
  let fixture: ComponentFixture<ProductViewsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductViewsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductViewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
