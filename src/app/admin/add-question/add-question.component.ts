import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  allQuestion: any;
  isEdit = false;
  errMsg:any;
  succesMsg:any;
  deleteMsg:any;
  updateMsg:any;
  getparamid:any;

  questionForm = new FormGroup({
    'question': new FormControl('',Validators.required),
    'option1': new FormControl('',Validators.required),
    'option2': new FormControl('',Validators.required),
    'option3': new FormControl('',Validators.required),
    'option4': new FormControl('',Validators.required),
    'answer': new FormControl('',Validators.required),
    'department': new FormControl('',Validators.required),
  })

  // questionObj={
  //   id:'',
  //   question:'',
  //   option1:'',
  //   option2:'',
  //   option3:'',
  //   option4:'',
  //   answer:'',
  //   department:''
  // }

  constructor(private api:ApiserviceService, private router:ActivatedRoute) { }

  ngOnInit(): void {
     this.getAllquestion();
     this.getparamid=this.router.snapshot.paramMap.get('id');
     this.api.getSingleQuestion(this.getparamid).subscribe((res)=>{
      console.log(res,'Selected Update Question');
      this.questionForm.patchValue({
        question:res.data[0].question,
        option1:res.data[0].option1,
        option2:res.data[0].option2,
        option3:res.data[0].option3,
        option4:res.data[0].option4,
        answer:res.data[0].answer,
        department:res.data[0].department,
      })
     })
  }
  getAllquestion(){
    this.api.getAllQuestion().subscribe((res)=>{
      console.log('Get All Data',res);
      this.allQuestion = res.data;
    })
  }
  questionSubmit(){
    if(this.questionForm.valid && (this.questionForm.value.answer === (this.questionForm.value.option1) || (this.questionForm.value.option2) || (this.questionForm.value.option3) || (this.questionForm.value.option4))){
      // console.log(this.questionForm.value);
      this.api.addQuestion(this.questionForm.value).subscribe((res)=>{
        console.log(res, 'Data Added Succesfully !!');
        this.questionForm.reset();
        this.succesMsg = res.message;
      })
    }
    else{
      this.errMsg ='All Fields Are Required';
    }
  }
  updateQuestion(){
    // console.log(this.questionForm.value);
    if(this.questionForm.valid){
      this.api.updateQuestion(this.questionForm.value,this.getparamid).subscribe((res)=>{
        console.log(res,'Question Updated Successfull');
        this.updateMsg = res.message;
      })
    }
    else{
      this.errMsg ='All Fields Are Required.';
    }
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

  





  // addQuestion(formObj: any){
  //   console.log(formObj)
  //   this.miniService.addQuestion(formObj).subscribe((response)=>{
  //     this.getLatestQuestion();
  //   })
  // }

  // getLatestQuestion(){
  //   this.miniService.getAllQuestion().subscribe((response)=>{
  //     this.allQuestion = response;
  //   })
  // }

  // editQuestion(question:any){
  //   this.isEdit=true;
  //   this.questionObj =question;
  // }

  // deleteQuestion(question: any){
  //   this.miniService.deleteQuestion(question).subscribe(()=>{
  //     this.getLatestQuestion();
  //   })
  //  }

  //  updateQuestion(){
  //    this.isEdit = !this.isEdit;
  //    this.miniService.updateQuestion(this.questionObj).subscribe(()=>{
  //      this.getLatestQuestion();
  //    })
  //  }
}
