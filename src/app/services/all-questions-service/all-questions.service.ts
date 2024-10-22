import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class AllQuestionsService {

  private typeSource = new BehaviorSubject<string>("");
  private questionData = new BehaviorSubject<string>("");
  private answerData = new BehaviorSubject<string>("");
  private votingtypeSource = new BehaviorSubject<string>("");


  Type$ = this.typeSource.asObservable();
  QuestionData$ = this.questionData.asObservable();
  AnswerData$ = this.answerData.asObservable();
  VotingCount$ = this.votingtypeSource.asObservable();

  constructor(private http: HttpClient) {}

  setAllQuestionsType(type: string) {
    this.typeSource.next(type);
  }

  setAllAnswersToQuestion(data: any) {
    // console.log("In all questions service ts file", data);
    this.questionData.next(data);
  }

  setAnswerData(data: any) {
    // console.log("In all questions set Answer data service ts file", data);
    this.answerData.next(data);
  }

  getAllQuestions(data:any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/getQuestionList", data);
  }

  getAllAnswersToQuestion(data: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/getQuestionAnswerList", data);
  }

  submitAnswerToQuestion(data: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/submitQuestionAnswer", data);
  }

  votingCountToAnswer(data: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/updateAnswerVoting", data);
  }

  approveCorrectAnswer(data: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/approveAnswer", data);
  }

  unapproveCorrectAnswer(data: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/unapproveAnswer", data);
  }
}
