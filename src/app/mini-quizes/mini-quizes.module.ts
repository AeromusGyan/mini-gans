import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsQuizComponent } from './cs-quiz/cs-quiz.component';
import { ItQuizComponent } from './it-quiz/it-quiz.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    CsQuizComponent,
    ItQuizComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class MiniQuizesModule { }
