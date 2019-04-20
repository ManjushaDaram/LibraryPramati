import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
 isArrowClicked=false;
  constructor() { }

  ngOnInit() {
  }

  IssueLocation()
  {
    this.isArrowClicked=true;
  }
}
export class NgbdDatepickerPopup {
  model;


}
