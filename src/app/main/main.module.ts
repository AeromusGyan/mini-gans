import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BncetComponent } from './bncet/bncet.component';
import { AboutComponent } from './about/about.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    BncetComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    CarouselModule
  ]
})
export class MainModule { }
