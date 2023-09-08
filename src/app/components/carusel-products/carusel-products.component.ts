import { Component, ElementRef, ViewChild } from "@angular/core"
import KeenSlider ,  { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-carusel-products',
  templateUrl: './carusel-products.component.html',
  styleUrls: ['./carusel-products.component.css']
})
export class CaruselProductsComponent {
  products = [
    {
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del Producto 2',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
    {
      name: 'Producto 3',
      description: 'Descripción del Producto 3',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
    {
      name: 'Producto 4',
      description: 'Descripción del Producto 4',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
    {
      name: 'Producto 5',
      description: 'Descripción del Producto 5',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
    {
      name: 'Producto 6',
      description: 'Descripción del Producto 6',
      image: 'https://a.espncdn.com/combiner/i?img=/photo/2023/0908/r1221456_1296x729_16-9.jpg'
    },
  ];
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  slider: KeenSliderInstance | null = null;

  constructor() { }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
 
}
