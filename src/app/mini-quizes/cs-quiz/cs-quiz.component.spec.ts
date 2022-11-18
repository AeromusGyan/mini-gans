import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsQuizComponent } from './cs-quiz.component';

describe('CsQuizComponent', () => {
  let component: CsQuizComponent;
  let fixture: ComponentFixture<CsQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
