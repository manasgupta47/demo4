import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsImageComponent } from './show-news-image.component';

describe('ShowNewsImageComponent', () => {
  let component: ShowNewsImageComponent;
  let fixture: ComponentFixture<ShowNewsImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowNewsImageComponent]
    });
    fixture = TestBed.createComponent(ShowNewsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
