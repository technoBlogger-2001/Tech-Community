import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  isQuestionAlertVisible = false;
  isANswerAlertVisible = false;

  constructor() { }

  QuestionAddedAlert() {
    this.isQuestionAlertVisible = true;

    setTimeout(() => {
      this.isQuestionAlertVisible = false;
      }, 2000);
  }

  AnswerAddedAlert() {
    this.isANswerAlertVisible = true;

    setTimeout(() => {
      this.isANswerAlertVisible = false;
    }, 2000);
  }
}
