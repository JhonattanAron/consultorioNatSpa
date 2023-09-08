import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselProductsComponent } from './carusel-products.component';

describe('CaruselProductsComponent', () => {
  let component: CaruselProductsComponent;
  let fixture: ComponentFixture<CaruselProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaruselProductsComponent]
    });
    fixture = TestBed.createComponent(CaruselProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
