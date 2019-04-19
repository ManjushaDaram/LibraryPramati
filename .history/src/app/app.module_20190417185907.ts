import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddissueComponent } from './AddIssue/addissue/addissue.component';
import {Tab} from './AddIssue/addissue/tabs/tab.component';
import {Tabs} from './AddIssue/addissue/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AddissueComponent,Tab,Tabs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
