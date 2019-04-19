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

export class Tabs implements AfterContentInit {
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
  @ContentChildren(Tab) tabs: QueryList<Tab>;

  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
}
