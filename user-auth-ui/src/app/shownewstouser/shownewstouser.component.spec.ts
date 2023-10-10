import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownewstouserComponent } from './shownewstouser.component';

describe('ShownewstouserComponent', () => {
  let component: ShownewstouserComponent;
  let fixture: ComponentFixture<ShownewstouserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShownewstouserComponent]
    });
    fixture = TestBed.createComponent(ShownewstouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
