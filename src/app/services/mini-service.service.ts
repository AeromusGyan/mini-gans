import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MiniServiceService {

  baseUrl: string = 'http://jsonplaceholder.cypress.io/'
  constructor( private http: HttpClient) { }
  listQuestions(){
    return this.http.get(this.baseUrl + 'questions');
  }
}
