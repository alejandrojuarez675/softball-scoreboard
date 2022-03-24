import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFooterComponent } from './ad-footer.component';

describe('AdFooterComponent', () => {
  let component: AdFooterComponent;
  let fixture: ComponentFixture<AdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
