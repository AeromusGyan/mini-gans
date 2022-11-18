import { Component, OnInit } from '@angular/core';

import { ApiserviceService } from 'src/app/services/apiservice.service';
import { MiniServiceService } from 'src/app/services/mini-service.service';
@Component({
  selector: 'app-it-quiz',
  templateUrl: './it-quiz.component.html',
  styleUrls: ['./it-quiz.component.css']
})
export class ItQuizComponent implements OnInit {
  listQuestions : any;
  allQuestion : any;
  totalLength : any;
  page:number = 1 ;
  correct:any;
  incorrect:any;

  constructor(private miniService:MiniServiceService, private api:ApiserviceService) {}

  ngOnInit(): void {
    this.api.getAllQuestion().subscribe((res)=>{
      // console.log('Get All Data',res);
      this.allQuestion = res.data;
      this.totalLength = res.length;

      for(var i in this.allQuestion){
        this.allQuestion[i].userans="";
      }
    })
  }

  userans(pos:any,ans:any){
    this.allQuestion[pos].userans = ans;

    this.checkResult();
  }
  checkResult(){
    // var correct=0,worng=0;
    
  var correctAns:any=0,incorrectAns:any=0;
    for(var i in this.allQuestion){
      
      if(this.allQuestion[i].userans == this.allQuestion[i].answer){
        this.correct=correctAns;
      }
      else{
        incorrectAns++;
        this.incorrect=incorrectAns;
      }
    }
    console.log("Total Correct:"+ correctAns +" \n Total Worng:" + incorrectAns);
  }
  QuizSubmit(){
    this.checkResult();
    //alert(JSON.stringify(this.correct));
    //alert(JSON.stringify(this.incorrect));
  }
}
