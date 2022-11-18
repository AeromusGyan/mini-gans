import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from "@angular/material/icon";
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCardModule,
  MatPaginatorModule,
  MatRadioModule,
  MatDividerModule,
  MatSnackBarModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
