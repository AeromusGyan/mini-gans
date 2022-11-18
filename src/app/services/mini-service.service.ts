import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiniServiceService {

  
  constructor(private _http:HttpClient) { }

  addQuestion(question: any){
    return this._http.post("http://localhost:3000/questions/",question)
  }
  getAllQuestion(){
    return this._http.get("http://localhost:3000/questions/")
  }

  updateQuestion(question:any){
    return this._http.put("http://localhost:3000/questions/" +question.id, question)
  }
  deleteQuestion(question: any){
    return this._http.delete("http://localhost:3000/questions/" +question.id)
  }
}
