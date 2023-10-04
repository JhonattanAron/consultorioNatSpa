import { Component } from '@angular/core';
import Products from 'src/app/interfaces/productos';
import { CarritoComprasService } from 'src/app/services/carrito-compras.service';

@Component({
  selector: 'app-carrito-de-compras',
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent {

  protected productos: Products[] = []

  constructor(
    private carritoComprasService: CarritoComprasService
  ) {
    this.productos = carritoComprasService.getProducts()
  }

  contadorCarrito(){
    let contador = this.productos.length
    return contador
  }

  calcularTotalPreciosOferta(): number {
    let total = 0;
    for (const producto of this.productos) {
      if (producto.precioOferta) {
        total += parseFloat(producto.precioOferta);
      }
    }
    return total;
  }
  deleteProducto(producto: Products) {
    this.carritoComprasService.deleteProducto(producto)
  }
  enviarMensaje() {
    const numeroWhatsApp = '+593993792827';
    const mensajePersonalizado = `
------------------------------------------------- 
        *PEDIDO REALIZADO - NAT SPA*
-------------------------------------------------
Fecha:${this.carritoComprasService.obtenerFechaConFormato()}
Descripción de los Productos/Servicios:
-------------------------------------------------
${this.obtenerFormatoProdcutos()}
-------------------------------------------------
   Subtotal: [${this.calcularTotalPreciosOferta()}]
-------------------------------------------------
Total a Pagar: *[${this.calcularTotalPreciosOferta()}]*

Fecha de Vencimiento: [${this.carritoComprasService.obtenerFechaConFormato()}]
-------------------------------------------------
`;

    const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePersonalizado)}`;

    window.open(enlaceWhatsApp, '_blank');
  }

  obtenerFormatoProdcutos() {
    let productosFormat: string = ``;
    this.productos.map((productos, index) => {
      productosFormat += `
      ${index + 1}. [${productos.nombre}]   Cantidad: [1]   
      Precio Unitario: [${productos.precioOferta}] Subtotal: [${productos.precioOferta}]
      `
    })

    return productosFormat;
  }



}
