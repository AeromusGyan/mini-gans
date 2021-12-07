import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Add component
import { AppComponent } from './app.component';
import { MasterModule } from './master/master.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MiniquizesModule } from './miniquizes/miniquizes.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterModule,
    BrowserAnimationsModule,
    MaterialModule,
    MiniquizesModule,
    LoadingBarRouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MainModule,
    AdminModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
