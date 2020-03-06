import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-yaxismodal',
  templateUrl: './yaxismodal.component.html',
  styleUrls: ['./yaxismodal.component.scss']
})
export class YaxismodalComponent implements OnInit {

  faCheck = faCheck;
  selectedVerticalValue: string;
  selectedItems: [];

  constructor(public dialogRef: MatDialogRef<YaxismodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  yarray = this.data;


  ngOnInit() {
  }


  onVerticalAxisSelect(key) {
    console.log(this.yarray);
    this.selectedItems = [];
    this.selectedVerticalValue = key;
    this.dialogRef.close(this.selectedVerticalValue);
  }

  getSelectedVerticalAxis() {
    return this.selectedVerticalValue;
  }

}
