import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiserviceService } from 'src/app/services/apiservice.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
data:any;
  userForm = new FormGroup({
    'userid': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required),
    'cpassword': new FormControl('',Validators.required),
  });

  constructor(private admin:ApiserviceService ,http:HttpClient) { }

  ngOnInit(): void {
    this.signup()
  }
  signup(){
    if(this.userForm.valid && this.userForm.value.password == this.userForm.value.cpassword){
      this.admin.createUser(this.userForm.value).subscribe((res)=>{
        // console.log(res, 'User Created Succefully');
        this.data= this.userForm.value
        alert(JSON.stringify(this.userForm.value))
      })
    }
    // else{
    //     alert('Password not match ! Please Input the Correct Password');
    // }
  }
}
