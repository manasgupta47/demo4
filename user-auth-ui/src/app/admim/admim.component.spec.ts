import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimComponent } from './admim.component';

describe('AdmimComponent', () => {
  let component: AdmimComponent;
  let fixture: ComponentFixture<AdmimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmimComponent]
    });
    fixture = TestBed.createComponent(AdmimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
