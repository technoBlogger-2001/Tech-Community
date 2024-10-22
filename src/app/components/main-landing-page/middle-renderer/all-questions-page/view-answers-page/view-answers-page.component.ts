import { Component, OnInit } from '@angular/core';
import { QUESTIONS_LIST } from '../../../../../../constants/mockData';  // Adjust import path

@Component({
  selector: 'app-view-answers-page',
  templateUrl: './view-answers-page.component.html',
  styleUrls: ['./view-answers-page.component.css']
})
export class ViewAnswersPageComponent implements OnInit {

  questionsList = QUESTIONS_LIST;

  constructor() {}

  ngOnInit() {
    // You can add additional logic here if necessary
  }

  GetVotingCount(type: string, answer: any) {
    if (type === 'Like') {
      answer.Voting_Count++;
    } else if (type === 'Dislike') {
      answer.Voting_Count--;
    }
  }

  ApproveCorrectAnswerToQuestion(answer: any) {
    answer.Approve_Flag = 1;
  }

  UnApproveCorrectAnswerToQuestion(answer: any) {
    answer.Approve_Flag = 0;
  }
}