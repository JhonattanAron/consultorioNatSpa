import { Component, ElementRef, HostListener, Renderer2  } from '@angular/core';
import { AnimationsService } from 'src/app/services/animations.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  constructor(
    private animationService:AnimationsService,
    private render:Renderer2,
    private el:ElementRef,
  ){

  }


  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event):void{
    this.animationService.animationDesplazarse('.animation' , 
    900 , 'left' , this.render , this.el)
    this.animationService.animationDesplazarse('.imgN' , 
    900, 'rigth' , this.render , this.el)
  }


}
