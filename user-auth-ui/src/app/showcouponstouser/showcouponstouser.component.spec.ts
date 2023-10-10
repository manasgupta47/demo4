import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcouponstouserComponent } from './showcouponstouser.component';

describe('ShowcouponstouserComponent', () => {
  let component: ShowcouponstouserComponent;
  let fixture: ComponentFixture<ShowcouponstouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcouponstouserComponent]
    });
    fixture = TestBed.createComponent(ShowcouponstouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
