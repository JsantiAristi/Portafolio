import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() sideBar: boolean = false;
  @Output() closeSideBar = new EventEmitter<boolean>

  constructor() {}

  toggleSidebar() {
    this.closeSideBar.emit(false);
  }
}
