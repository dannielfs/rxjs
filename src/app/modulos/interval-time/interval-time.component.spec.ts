import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalTimeComponent } from './interval-time.component';

describe('IntervalTimeComponent', () => {
  let component: IntervalTimeComponent;
  let fixture: ComponentFixture<IntervalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
