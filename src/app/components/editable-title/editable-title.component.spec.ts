import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTitleComponent } from './editable-title.component';

describe('EditableTitleComponent', () => {
  let component: EditableTitleComponent;
  let fixture: ComponentFixture<EditableTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
