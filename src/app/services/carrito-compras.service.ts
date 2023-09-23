import { Injectable } from '@angular/core';
import Products from '../interfaces/productos';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {
  carrito:Products[] = []

  constructor(
    private snackvarService:SnackBarService
  ){

  }


  setProducts(producto:Products){
    this.carrito.push(producto)
    this.snackvarService.openSnackBar("Producto Agregado Con Exito" , 'close')
  }
  getProducts(){
    return this.carrito;
  }
  deleteProducto(producto:Products){
    const index = this.carrito.indexOf(producto);

    if (index !== -1) {
      this.carrito.splice(index, 1);
    }
  }
  obtenerFechaConFormato() {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, '0');
    const mes = String(fechaActual.getMonth() + 1).padStart(2, '0'); // Se suma 1 porque los meses comienzan desde 0 (enero es 0)
    const año = fechaActual.getFullYear();
  
    const fechaFormateada = `${dia}/${mes}/${año}`;
    return fechaFormateada;
  }

  
}
