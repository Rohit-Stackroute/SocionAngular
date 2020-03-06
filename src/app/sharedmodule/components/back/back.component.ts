import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})
export class BackComponent {
  faBackward = faArrowLeft;
  // tslint:disable-next-line: variable-name
  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }
}
