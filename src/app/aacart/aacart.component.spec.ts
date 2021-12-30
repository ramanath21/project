import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AacartComponent } from './aacart.component';

describe('AacartComponent', () => {
  let component: AacartComponent;
  let fixture: ComponentFixture<AacartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AacartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AacartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
