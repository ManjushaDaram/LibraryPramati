import { Component, Input } from '@angular/core';
import {Tab}from './tab.component';
import { ContentChildren, QueryList } from '@angular/core';
import { AfterContentInit } from '@angular/core';

@Component({
  selector: 'tabs',
  template: `
  <ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
      <a href="#">{{tab.title}}</a>
    </li>
  </ul>
  <ng-content></ng-content>
`
})
export class Tabs {
  tabs: Tab[] = [];

  selectTab(tab: Tab) {
    this.tabs.forEach((tab) => {
      tab.active = false;
    });
    tab.active = true;
  }

  addTab(tab: Tab) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

}
export class Tabs implements AfterContentInit {

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  // contentChildren are set
  ngAfterContentInit() {
    ...
  }
