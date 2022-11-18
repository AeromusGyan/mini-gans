import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { MiniServiceService } from 'src/app/services/mini-service.service';

@Component({
  selector: 'app-cs-quiz',
  templateUrl: './cs-quiz.component.html',
  styleUrls: ['./cs-quiz.component.css']
})
export class CsQuizComponent implements OnInit {

  listQuestions : any;
  allQuestion : any;
  totalLength : any;
  page:number = 1 ;
  correct:any;
  incorrect:any;
  department:any;
  marks:any=false;
  qnsCount: number = 0;
  arrayLength: number = 0;
  next = false;
  selectedAns: any;
  selectedIndex: any;
  option = false;
  data: any;
  userprofile: any = [];
  allUser: any =[];
  constructor(private miniService:MiniServiceService, private api:ApiserviceService) {

    this.data = localStorage.getItem("userdata");
    this.correct = localStorage.getItem("Correct Answer")
    this.incorrect = localStorage.getItem("Incorrect Answer") 

    if (this.data != null) {
      this.userprofile = JSON.parse(this.data);
    }
  }

  ngOnInit(): void {
    this.api.getAllQuestion().subscribe((res)=>{
      // console.log('Get All Data',res);
      this.allQuestion = res.data;
      // this.department=this.allQuestion.questions.department;
      this.totalLength = res.length;
      this.arrayLength = this.allQuestion.length;
       this.allQuestion.sort(() => 0.5 - Math.random());
       for (var i in this.allQuestion) {
         this.allQuestion[i].userans = "";
       }
    })
  }

  userans(pos: any, ans: any) {
    this.allQuestion[pos].userans = ans;
    //console.log(this.allQuestion[pos].userans);
    localStorage.setItem('qans', this.allQuestion[pos].userans);
    this.selectedIndex = this.allQuestion[pos].answer;
    if (this.allQuestion[pos]) {
      this.option = true;
    }
    this.checkResult();
  }

  checkResult() {
    var correctAns: any = 0, incorrectAns: any = 0, x = 0;
    x = this.allQuestion.length;
    for (var i in this.allQuestion) {
      if (this.allQuestion[i].userans == this.allQuestion[i].answer) {
        correctAns++;
        this.correct = correctAns;
        localStorage.setItem('Correct Answer', this.correct = correctAns)
      }
      else {
        incorrectAns++;
        this.incorrect = incorrectAns;
        localStorage.setItem('Incorrect Answer', this.incorrect = incorrectAns)
      }
    }
  }

  QuizSubmit() {
    this.checkResult();
    this.marks = true;
    window.location.href = '/result';
  }
  nextQns() {
    this.checkResult();
    this.qnsCount++;
    this.option = false;
    if (this.qnsCount == this.arrayLength) {
      this.marks = true;
      this.next = true;
      this.allQuestion.sort(() => 0.5 - Math.random());
      this.leaderboard();
    }
  }
  prevQns(){
    if(this.qnsCount>0){
      this.qnsCount--;
    }
  }
  restart() {
    window.location.href = '/csquiz';
  }
  leaderboard() {
    this.allUser;
    // this.api.getAllUser().subscribe((res) => {
       //= res.data;
   // }
   // )
  }
}
