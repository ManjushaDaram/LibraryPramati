import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class NgbdDatepickerPopup {
  model = { "year": "2017", "month": "2", "day": "25" };
}
