import { Component, OnInit } from '@angular/core';
import { MiniServiceService } from 'src/app/services/mini-service.service';

@Component({
  selector: 'app-cs-quiz',
  templateUrl: './cs-quiz.component.html',
  styleUrls: ['./cs-quiz.component.css']
})
export class CsQuizComponent implements OnInit {

  favoriteSeason: any;
  seasons: any[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  listQuestions: any;
  myData = {  
    email: "",  
    password: ""
  };  

  constructor( private miniService: MiniServiceService) { }

  ngOnInit(): void {
    this.listQuestions = this.miniService.listQuestions().subscribe(data =>{
      this.listQuestions = data;
    });
  }

}
