import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsDetailsComponent } from './update-news-details.component';

describe('UpdateNewsDetailsComponent', () => {
  let component: UpdateNewsDetailsComponent;
  let fixture: ComponentFixture<UpdateNewsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNewsDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
