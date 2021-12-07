import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stringifiedData: any;

  myData = {  
    email: "",  
    password: ""
  };  
  
  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.myData);  
    // Convert to JSON  
    this.stringifiedData = JSON.stringify(this.myData);  
    console.log("With Stringify :" , this.stringifiedData);  
  }
  login(){

    alert (JSON.stringify(this.myData));
  }

}
