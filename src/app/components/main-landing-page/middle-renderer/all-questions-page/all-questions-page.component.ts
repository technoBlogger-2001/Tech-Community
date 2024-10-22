import { Component, OnInit } from '@angular/core';
import { AllQuestionsService } from "../../../../services/all-questions-service/all-questions.service";
import { LoadersService } from "../../../../services/loaders/loaders.service";
import { QUESTIONS_LIST } from '../../../../../constants/mockData'; // Import mock data

@Component({
  selector: 'app-all-questions-page',
  templateUrl: './all-questions-page.component.html',
  styleUrl: './all-questions-page.component.css'
})
export class AllQuestionsPageComponent implements OnInit {
  QuestionsList: any[] = [];
  searchTerm: string = "";

  constructor(public allQuestionsService: AllQuestionsService,
              public loaderService: LoadersService) {}

  ngOnInit(): void {
    this.GetAllQuestions();
  }

  SearchQuestion(eve: any) {
    this.searchTerm = eve.target.value;
    this.GetAllQuestions();
  }

  GetAllQuestions() {
    // For demonstration purposes, we're using mock data here
    this.QuestionsList = QUESTIONS_LIST.filter(question => 
      question.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  GetAllAnswersToQuestion(questionId: number) {
    const selectedQuestion = this.QuestionsList.find(q => q.id === questionId);
    if (selectedQuestion) {
      this.allQuestionsService.setAllAnswersToQuestion(selectedQuestion);
      console.log("Selected question:", selectedQuestion);
    }
  }

  SubmitAnswerToQuestion(data: any) {
    this.allQuestionsService.setAnswerData(data);
    console.log("In all questions ts file", data);
  }
}