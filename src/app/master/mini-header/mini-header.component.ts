import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/admin/login/login.component';
@Component({
  selector: 'app-mini-header',
  templateUrl: './mini-header.component.html',
  styleUrls: ['./mini-header.component.css']
})
export class MiniHeaderComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  login(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width ="60%";
    this.dialog.open(LoginComponent);
    
  }
}
