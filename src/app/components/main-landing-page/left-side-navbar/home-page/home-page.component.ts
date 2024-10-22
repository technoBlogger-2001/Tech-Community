import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AllQuestionsService } from "../../../../services/all-questions-service/all-questions.service";
import { UserProfileService } from "../../../../services/user-profile-service/user-profile.service";
import { LoadersService } from "../../../../services/loaders/loaders.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  constructor(public userProfileService: UserProfileService,
              public allQuestionsService: AllQuestionsService,
              private router: Router,
              public loaderService: LoadersService,) {}


  // showSpinner(): void {
  //   this.spinnerService.showSpinner();
  //   // Your async operation here
  //   setTimeout(() => {
  //     this.spinnerService.hideSpinner();
  //   }, 2000);
  // }

  ngOnInit(): void {
    this.allQuestionsService.setAllQuestionsType("Recent");
    // this.router.navigate(['/all-questions']);
  }

  getQuestionsByType(type: string) {
      this.allQuestionsService.setAllQuestionsType(type);
    // this.router.navigate(['/all-questions']);
  }



}
