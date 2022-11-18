import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './admin/add-question/add-question.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './main/about/about.component';
import { BncetComponent } from './main/bncet/bncet.component';
import { HomeComponent } from './main/home/home.component';
import { MainComponent } from './main/main.component';
import { CsQuizComponent } from './mini-quizes/cs-quiz/cs-quiz.component';
import { ItQuizComponent } from './mini-quizes/it-quiz/it-quiz.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'csquiz', component:CsQuizComponent},
  {path:'login', component:LoginComponent},
  {path:'bncet', component:BncetComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'itquiz', component:ItQuizComponent},
  {path: 'dashboard/email', component:DashboardComponent},
  {path: 'addquestion', component:AddQuestionComponent},
  {path: 'addquestion/:id', component:AddQuestionComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
