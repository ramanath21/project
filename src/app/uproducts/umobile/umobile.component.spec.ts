import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmobileComponent } from './umobile.component';

describe('UmobileComponent', () => {
  let component: UmobileComponent;
  let fixture: ComponentFixture<UmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
