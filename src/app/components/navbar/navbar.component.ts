import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarScrolled: boolean = false;
  sideBarOpen: boolean = false;

  @ViewChild('sideBar', { static: false }) sideBar!: MatSidenav;

  constructor(
    private sideBarService: SideBarService
  ){
    sideBarService.getSideBarStatus().subscribe( (status: boolean) => {
      this.sideBarOpen = status;
      console.log(this.sideBarOpen);
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      const number = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 50) {
          this.navbarScrolled = true;
      } else {
          this.navbarScrolled = false;
      }
  }

  onSideBarOpen(){
    this.sideBarService.setSideBarStatus(true);
    this.sideBar.toggle();
  }

  OnSideBarClose(){
    this.sideBarService.setSideBarStatus(false);
    this.sideBar.toggle();
  }

}
