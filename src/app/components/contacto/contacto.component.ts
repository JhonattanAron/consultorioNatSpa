import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(
    private animacionService:AnimationsService,
    private render:Renderer2,
    private el:ElementRef
  ){
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event):void{
    this.animacionService.animationDesplazarse('.contacto' , 500 , 'traslate' , this.render , this.el)
  }

}
