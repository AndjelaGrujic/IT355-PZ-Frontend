import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl = 'http://localhost:8080/quiz/';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) { }

  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  public getAllQuiz() {
    return this.http.get(`${baseUrl}`);
  }
  public addQuiz(data: any) {
    console.log(data);
    return this.http.post(`${baseUrl}`, data);
  }
  public deleteQuiz(qId: any) {
    return this.http.delete(`${baseUrl}${qId}`);
  }

  public getQuiz(qid: any) {
    return this.http.get(`${baseUrl}/${qid}`);
  }

  public updateQuiz(data: any) {
    return this.http.put(`${baseUrl}/`, data);
  }

  public getQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}category/${cid}`);
  }
  public getActiveQuizzes() {
    return this.http.get(`${baseUrl}active`);
  }
  public getActiveQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}category/active/${cid}`);
  }
}