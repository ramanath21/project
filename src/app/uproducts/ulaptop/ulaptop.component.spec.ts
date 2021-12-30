import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlaptopComponent } from './ulaptop.component';

describe('UlaptopComponent', () => {
  let component: UlaptopComponent;
  let fixture: ComponentFixture<UlaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UlaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UlaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
