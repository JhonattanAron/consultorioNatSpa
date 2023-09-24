import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrigthComponent } from './copyrigth.component';

describe('CopyrigthComponent', () => {
  let component: CopyrigthComponent;
  let fixture: ComponentFixture<CopyrigthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyrigthComponent]
    });
    fixture = TestBed.createComponent(CopyrigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
