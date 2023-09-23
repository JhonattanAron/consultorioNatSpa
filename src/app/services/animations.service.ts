import {ElementRef, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService {

  constructor(){

  }

  animationDesplazarse(query:string , posisionDeseada:number , claseCss:string , render:Renderer2 , el:ElementRef){
    const card = el.nativeElement.querySelector(query);
    const posisionCard = card.getBoundingClientRect().top;

    if (posisionCard < posisionDeseada) {
      render.addClass(card, claseCss);
    }else{
      render.removeClass(card, claseCss);
    }
  }

  
}
