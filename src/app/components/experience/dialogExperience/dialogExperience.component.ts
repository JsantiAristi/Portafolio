import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-experience',
  templateUrl: './dialogExperience.component.html',
  styleUrls: ['./dialogExperience.component.css'],
})
export class DialogExperienceComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
    ){
      console.log(data);

    }
}
