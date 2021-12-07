import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniHeaderComponent } from './mini-header/mini-header.component';
import { MaterialModule } from '../material/material.module';
import { MiniFooterComponent } from './mini-footer/mini-footer.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    MiniHeaderComponent,
    MiniFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AdminModule
  ],
  exports: [
    MiniHeaderComponent,
    MiniFooterComponent
  ]
  
})
export class MasterModule { }
