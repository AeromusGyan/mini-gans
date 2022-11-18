import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allQuestion:any;
  deleteMsg:any;
  data:any;
  profile={
    userid:"GYAN PRAKASH",
    email:"admin@minigans.com",
    password:"admin"
  }
  constructor(private api:ApiserviceService, private router:Router, private http:HttpClient) {
    this.data = this.getAllquestion();
    if(this.data=true){
      this.allQuestion = JSON.parse(this.data); 
    }
   }
  ngOnInit(): void {
    this.getAllquestion();
 }

 getAllquestion(){
   this.api.getAllQuestion().subscribe((res)=>{
    //  console.log('Get All Data',res);
     this.allQuestion = res.data;
   })
 }

 updateQuestion(){
}

 deleteId(id:any){
  // console.log(id,'Selected Id');
  this.api.deleteQuestion(id).subscribe((res)=>{
    console.log(res,'Deleted Id No.');
    this.deleteMsg=res.message; 
    //instance load data
    this.getAllquestion();
  })
}
}
