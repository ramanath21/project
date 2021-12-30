import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UproductsComponent } from './uproducts.component';

describe('UproductsComponent', () => {
  let component: UproductsComponent;
  let fixture: ComponentFixture<UproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
