import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesRedesComponent } from './botones-redes.component';

describe('BotonesRedesComponent', () => {
  let component: BotonesRedesComponent;
  let fixture: ComponentFixture<BotonesRedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesRedesComponent]
    });
    fixture = TestBed.createComponent(BotonesRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
