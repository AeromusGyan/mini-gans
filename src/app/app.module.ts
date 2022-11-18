import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MasterModule } from './master/master.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
import { MiniQuizesModule } from './mini-quizes/mini-quizes.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceService } from './services/apiservice.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MasterModule,
    LoadingBarRouterModule,
    FormsModule,
    ReactiveFormsModule,
    MainModule,
    AdminModule,
    MiniQuizesModule,
    RouterModule,
    HttpClientModule,
    CarouselModule,
    NgxPaginationModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
