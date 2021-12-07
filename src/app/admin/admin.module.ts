import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MasterModule } from '../master/master.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MasterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AdminModule { }
