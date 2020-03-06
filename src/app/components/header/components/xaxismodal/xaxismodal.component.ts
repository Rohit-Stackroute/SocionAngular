import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-xaxismodal',
  templateUrl: './xaxismodal.component.html',
  styleUrls: ['./xaxismodal.component.scss']
})
export class XaxismodalComponent implements OnInit {

  faCheck = faCheck;
  selectedItems = [];
  selectedHorizontalValue: string;

  constructor(public dialogRef: MatDialogRef<XaxismodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  xarray = this.data;

  ngOnInit() {
  }

  onHorizontalAxisSelect(key) {
    console.log(this.xarray);
    this.selectedItems = [];
    this.selectedHorizontalValue = key;
    this.dialogRef.close(this.selectedHorizontalValue);
  }

  getSelectedHorizontalAxis() {

    return this.selectedHorizontalValue;
  }

}
