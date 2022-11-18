import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniheadComponent } from './minihead/minihead.component';
import { MinifooterComponent } from './minifooter/minifooter.component';
import { MaterialModule } from '../material/material.module';
import { MainModule } from '../main/main.module';
import { MiniQuizesModule } from '../mini-quizes/mini-quizes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MiniheadComponent,
    MinifooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MainModule,
    MiniQuizesModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MiniheadComponent,
    MinifooterComponent
  ]
})
export class MasterModule { }
