import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarScrolled: boolean = false;
  sideBar:boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 50) {
          this.navbarScrolled = true;
      } else {
          this.navbarScrolled = false;
      }
  }

  abrirSidebar() {
    this.sideBar = !this.sideBar
  }
}
