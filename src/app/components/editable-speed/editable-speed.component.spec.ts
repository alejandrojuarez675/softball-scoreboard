import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableSpeedComponent } from './editable-speed.component';

describe('EditableSpeedComponent', () => {
  let component: EditableSpeedComponent;
  let fixture: ComponentFixture<EditableSpeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableSpeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
