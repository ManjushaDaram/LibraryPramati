import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddissueComponent } from './AddIssue/addissue/addissue.component';
import {Tab} from './AddIssue/addissue/tabs/tab.component';
import {Tabs} from './AddIssue/addissue/tabs/tabs.component';
import { GeneralComponent } from './AddIssue/addissue/Details/general/general.component';
import { QuestionsComponent } from './AddIssue/addissue/Details/questions/questions.component';
import { ReporterComponent } from './AddIssue/addissue/Details/reporter/reporter.component';
import { SubjectsComponent } from './AddIssue/addissue/Details/subjects/subjects.component';
import {  SummaryComponent} from './AddIssue/addissue/Details/summary/summary.component';




@NgModule({
  declarations: [
    AppComponent,
    AddissueComponent,Tab,Tabs, GeneralComponent, QuestionsComponent,ReporterComponent,SubjectsComponent,SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
