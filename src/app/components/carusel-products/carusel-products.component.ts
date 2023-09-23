import { Component, OnInit} from "@angular/core"
import Products from "src/app/interfaces/productos";
import { CarritoComprasService } from "src/app/services/carrito-compras.service";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: 'app-carusel-products',
  templateUrl: './carusel-products.component.html',
  styleUrls: ['./carusel-products.component.css']
})
export class CaruselProductsComponent implements OnInit {
  products:Products[] = [];
  currentSlide = 0;
  isLoading = true

  constructor(
    private productsService:ProductsService,
    private carritoCompras:CarritoComprasService
  ) {
    this.cargarProductos()
  }

  cargarProductos(){
    this.productsService.getProducts().then(
      data => {
        this.products = data
        this.isLoading = false
      }
    )
   
  }

  enviarAlCarrito(producto:Products){
    this.carritoCompras.setProducts(producto);
  }
  


  ngOnInit() {
    
  }

  nextSlide() {
    
  }
 
}
