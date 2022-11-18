import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MasterModule } from '../master/master.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MasterModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
