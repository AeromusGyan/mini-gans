import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniheadComponent } from './minihead.component';

describe('MiniheadComponent', () => {
  let component: MiniheadComponent;
  let fixture: ComponentFixture<MiniheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
