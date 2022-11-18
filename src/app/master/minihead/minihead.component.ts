
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiserviceService } from 'src/app/services/apiservice.service';
@Component({
  selector: 'app-minihead',
  templateUrl: './minihead.component.html',
  styleUrls: ['./minihead.component.css']
})
export class MiniheadComponent implements OnInit {

  listUsers : any;
  sign :any= false;
  forget:any =false;
  getparamid:any;
  data:any;
  dateTime:any=Date;
  userprofile:any=[];
  succesMsg: any;
  errMsg: any;
  userForm = new FormGroup({
    'userid': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required),
    'cpassword': new FormControl('',Validators.required),
  });
  // public loginForm!: FormGroup;
  
  profile={
    userid:"GYAN PRAKASH",
    email:"admin@minigans.com",
    password:"admin"
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(private router:Router, private admin:ApiserviceService , private formBuilder : FormBuilder, private http:HttpClient) {
    this.data = localStorage.getItem("userdata");
    if(this.data!=null){
      this.userprofile = JSON.parse(this.data);
      //alert(JSON.stringify(this.userprofile));
    }
   }
   message(hrs:any){
     if(hrs<12){
       return "🌅 Good Morning"
     }
     else if(hrs>=12 && hrs<=17){
        return "🌞 Good Afternoon"
    }
    else {
      return "🌇 Good Evening";
    }
   }
   
   loginForm = new FormGroup({
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
  });

  ngOnInit(): void {
    // this.getAllUser();
    this.dateTime = new Date();

  }
  login(){
    this.forget=false;
    this.admin.getLogin(this.loginForm.value.email,this.loginForm.value.password).subscribe(
      Response=>{
        this.userprofile=Response;
        localStorage.setItem("userdata",JSON.stringify(this.userprofile));
        if(this.loginForm.value.email =="admin@minigans.com" && this.loginForm.value.password == "admin"){
          window.location.href='/dashboard/email';
        }
        else{
          window.location.href='/';
        }
        //alert(JSON.stringify(this.user));
      },
      error=>{
        alert("Userid or Password not match");
      }
    );
    
  }
  newuser(){
    this.sign = true;
    this.loginForm.reset();
  }
  signup(){
    if(this.userForm.valid && this.userForm.value.password == this.userForm.value.cpassword){
      // console.log(this.userForm.value);
      this.admin.createUser(this.userForm.value).subscribe((res)=>{
        console.log(res, 'User Created Succefully');
        this.userForm.reset();
        this.succesMsg = res.message;
        this.clear();
      })
    }
    else{
      setTimeout(() => {
        this.errMsg ='Password not match ! Please Input the Correct Password';
      }, 1000); 
    }
    if(this.userForm.invalid){
      setTimeout(() => {
        this.errMsg ='All Fields Are Required';
      }, 1000);
    }
  }
  clear(){
    this.sign = false;
    this.forget = false;
    this.userForm.reset();
  }
  logout(){
    localStorage.removeItem("userdata");
    window.location.href='/';
  }
  forgetpass(){

    this.forget =true;
    this.sign =false;
    this.userForm.reset();
  }
  // getAllUser(){
  //   this.admin.getAllUser().subscribe((res)=>{
  //     console.log('Get All Data',res);
  //    this.userprofile = res.data;
  //   })
  // }
}
