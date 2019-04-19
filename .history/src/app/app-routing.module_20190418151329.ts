import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './AddIssue/addissue/Details/general/general.component';
import { QuestionsComponent } from './AddIssue/addissue/Details/questions/questions.component';
import { ReporterComponent } from './AddIssue/addissue/Details/reporter/reporter.component';
import { SubjectsComponent } from './AddIssue/addissue/Details/subjects/subjects.component';
import {  SummaryComponent} from './AddIssue/addissue/Details/summary/summary.component';


const routes: Routes = [
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'reporter',
    component: ReporterComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
