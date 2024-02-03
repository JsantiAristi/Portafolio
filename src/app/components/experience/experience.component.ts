import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExperienceComponent } from './dialogExperience/dialogExperience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  constructor(
    public dialog: MatDialog
  ){}

  openDialog(empresa: string){
    this.dialog.open(DialogExperienceComponent, {
      data: empresa
    })
  }

}
