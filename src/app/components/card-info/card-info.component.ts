import { Component, Input , Renderer2 , OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  constructor(
    private render:Renderer2,
    private el: ElementRef){

  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event):void{
    const card = this.el.nativeElement.querySelector('.apAnimation');
    const posisionCard = card.getBoundingClientRect().top;
    const posisionDeseada = 900;

    if (posisionCard < posisionDeseada) {
      this.render.addClass(card, 'traslate');
    }else{
      this.render.removeClass(card, 'traslate');

    }
  }
  
  ngOnInit(): void {

  }

  @Input() imgHeader: any;
  @Input() cardTittle: any;
  @Input() Caractersitcas: any;
  @Input() colorHover:any;

}
