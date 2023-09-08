import { Component } from '@angular/core';
import Products from 'src/app/interfaces/productos';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Products[] = []

  constructor(
    private productosService: ProductsService,
  ) { }

  async agregarProducto() {
    const response = await this.productosService.addProduct({
      nombre: 'Farmaco',
      urlImgPortada: 'https://prevencionsaludproactiv.com/wp-content/uploads/2021/11/nuevos-farmacos-web.jpg',
      descripcion: 'Farmaco',
      precioNormal: '3.5',
      precioOferta: '2.5',
    })
    console.log(response);
  }
  obtenerProductos() {
    this.productosService.getProducts().then(
      data => console.log(data)
    )
  }

}
