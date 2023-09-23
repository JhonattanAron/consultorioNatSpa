import { Component } from '@angular/core';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent {
  protected beneficiosLipoSinCirugia: string[] = [
    `Aunque parezca increíble, en Nat Spa
    lo hacemos realidad. Te contamos un poco sobre que es 
    la grasa localizada y cómo eliminarla de manera inmediata 
    con nuestro tratamiento de liposucción SIN CIRUGÍA y 
    sin riesgos. `
  ];
  protected caracteristicasLimpiezaFacial: string[] = [
    `El “triángulo de la belleza” lo forman los 
    pómulos altos y la línea mandibular delgada o
     bien definida, propio de los rostros jóvenes.
      Es decir, la parte superior del rostro es más 
      ancha y el mentón es alargado, suponiendo el 
      punto más estrecho del rostro. Unos factores 
    que generan una apariencia relajada y positiva.`
  ];
  protected caracteristicasPeelingFacial: string[] = [
    `Limpieza Facial Profunda / Hidratación y Nutrición Facial
    La limpieza facial es un tratamiento de la piel de la cara 
    orientado a extraer puntos negros, quitar puntos blancos y 
    otras lesiones o acumulaciones de su piel.`
  ];
  

}
