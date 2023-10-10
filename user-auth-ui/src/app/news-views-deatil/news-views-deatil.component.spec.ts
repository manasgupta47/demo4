import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewsDeatilComponent } from './news-views-deatil.component';

describe('NewsViewsDeatilComponent', () => {
  let component: NewsViewsDeatilComponent;
  let fixture: ComponentFixture<NewsViewsDeatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsViewsDeatilComponent]
    });
    fixture = TestBed.createComponent(NewsViewsDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
