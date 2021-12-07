
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsQuizComponent } from './cs-quiz/cs-quiz.component';
import { MaterialModule } from '../material/material.module';
import { ItQuizComponent } from './it-quiz/it-quiz.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CsQuizComponent,
    ItQuizComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    CsQuizComponent
  ]
})
export class MiniquizesModule { }
