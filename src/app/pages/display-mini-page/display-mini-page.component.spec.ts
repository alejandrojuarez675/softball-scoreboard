import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMiniPageComponent } from './display-mini-page.component';

describe('DisplayMiniPageComponent', () => {
  let component: DisplayMiniPageComponent;
  let fixture: ComponentFixture<DisplayMiniPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMiniPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMiniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
