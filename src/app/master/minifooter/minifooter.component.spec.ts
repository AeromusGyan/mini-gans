import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifooterComponent } from './minifooter.component';

describe('MinifooterComponent', () => {
  let component: MinifooterComponent;
  let fixture: ComponentFixture<MinifooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinifooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
