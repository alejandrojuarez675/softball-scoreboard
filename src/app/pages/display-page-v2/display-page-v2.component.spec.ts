import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPageV2Component } from './display-page-v2.component';

describe('DisplayPageV2Component', () => {
  let component: DisplayPageV2Component;
  let fixture: ComponentFixture<DisplayPageV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPageV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPageV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
