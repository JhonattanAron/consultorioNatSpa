import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent {
  @Input() images:string[] | undefined ;
  @Input() dataImg: any;
}
