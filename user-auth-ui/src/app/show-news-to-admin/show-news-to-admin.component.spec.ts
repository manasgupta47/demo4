import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsToAdminComponent } from './show-news-to-admin.component';

describe('ShowNewsToAdminComponent', () => {
  let component: ShowNewsToAdminComponent;
  let fixture: ComponentFixture<ShowNewsToAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowNewsToAdminComponent]
    });
    fixture = TestBed.createComponent(ShowNewsToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
