import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.less']
})
export class SuccessDialogComponent implements OnInit {

  slotsAlreadyBooked: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SuccessDialogComponent>) { }

  ngOnInit() {
    if (this.data == null) {
      this.slotsAlreadyBooked = true;
    }
    else {
      this.slotsAlreadyBooked = false;
    }
  }

  close() {
    this.dialogRef.close('cancel');
  }

}
