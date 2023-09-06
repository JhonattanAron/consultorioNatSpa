import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {
  @Input() paginas: any;

  isScrolled = false;

  @HostListener('window:scroll', ['$event'])
  manejarScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollThreshold = 100; 

    this.isScrolled = scrollPosition >= scrollThreshold;
  }

  manejarNav(){
    const links = document.getElementById("links")
    links?.classList.toggle('visible')
  }

}
