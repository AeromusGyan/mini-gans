import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BncetComponent } from './bncet.component';

describe('BncetComponent', () => {
  let component: BncetComponent;
  let fixture: ComponentFixture<BncetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BncetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BncetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
