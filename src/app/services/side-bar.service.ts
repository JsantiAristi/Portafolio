import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  sideBarOpen = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSideBarStatus(){
    return this.sideBarOpen;
  }

  setSideBarStatus(status: boolean){
    this.sideBarOpen.next(status)
  }
}
