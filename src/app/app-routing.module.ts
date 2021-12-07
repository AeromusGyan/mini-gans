import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CsQuizComponent } from './miniquizes/cs-quiz/cs-quiz.component';
import { LoginComponent } from "./admin/login/login.component";
import { BncetComponent } from "./main/bncet/bncet.component";
import { AboutComponent } from "./main/about/about.component";
import { HomeComponent } from "./main/home/home.component";
import { ItQuizComponent } from './miniquizes/it-quiz/it-quiz.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'csquiz', component:CsQuizComponent},
  {path:'login', component:LoginComponent},
  {path:'bncet', component:BncetComponent},
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'itquiz', component:ItQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
