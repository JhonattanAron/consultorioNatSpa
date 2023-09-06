import { Component } from '@angular/core';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent {
  protected beneficiosLipoSinCirugia: string[] = [
    'Mínimo tiempo de inactividad',
    'Menos riesgos y complicaciones',
    'Proceso no invasivo, sin incisiones',
    'Anestesia general no requerida',
    'Resultados visibles en poco tiempo',
    'Reducción de grasa localizada',
    'Menos dolor y molestias postoperatorias',
    'No deja cicatrices permanentes',
    'Puede ser realizado en varias áreas del cuerpo',
    'Generalmente no requiere hospitalización',
  ];
  protected caracteristicasLimpiezaFacial: string[] = [
    'Eliminación de impurezas de la piel',
    'Exfoliación suave para eliminar células muertas',
    'Limpieza profunda de los poros',
    'Hidratación de la piel',
    'Mejora de la circulación sanguínea facial',
    'Estimulación de la regeneración celular',
    'Reducción de puntos negros y acné leve',
    'Relajación y sensación de frescura',
    'Mejora de la textura de la piel',
    'Mejora de la textura de la piel',
  ];
  protected caracteristicasPeelingFacial: string[] = [
    'Exfoliación profunda de la piel',
    'Eliminación de células muertas',
    'Reducción de manchas oscuras y decoloración',
    'Estimulación de la producción de colágeno',
    'Reducción de arrugas y líneas finas',
    'Mejora de la textura y tono de la piel',
    'Puede ayudar en casos de acné y poros dilatados',
    'Resultados visibles en múltiples sesiones',
    'Puede ser personalizado según las necesidades de la piel',
    'Puede requerir tiempo de recuperación dependiendo del tipo de peeling',
  ];
  

}
