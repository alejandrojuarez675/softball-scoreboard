import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableInningComponent } from './editable-inning.component';

describe('EditableInningComponent', () => {
  let component: EditableInningComponent;
  let fixture: ComponentFixture<EditableInningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableInningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableInningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
