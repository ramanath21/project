import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UheadphoneComponent } from './uheadphone.component';

describe('UheadphoneComponent', () => {
  let component: UheadphoneComponent;
  let fixture: ComponentFixture<UheadphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UheadphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UheadphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
