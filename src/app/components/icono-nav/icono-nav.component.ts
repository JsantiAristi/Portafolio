import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-icono-nav',
  templateUrl: './icono-nav.component.html',
  styleUrls: ['./icono-nav.component.css']
})
export class IconoNavComponent {
  navbarScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 50) {
          this.navbarScrolled = true;
      } else {
          this.navbarScrolled = false;
      }
  }

}
