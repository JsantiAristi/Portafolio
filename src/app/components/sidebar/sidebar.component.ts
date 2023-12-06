import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideBarService } from 'src/app/services/side-bar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private sideBarService: SideBarService
  ) {}

  toggleSidebar() {
    this.sideBarService.setSideBarStatus(false);
  }
}
