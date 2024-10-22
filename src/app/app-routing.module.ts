import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomePageComponent } from "./components/main-landing-page/left-side-navbar/home-page/home-page.component";
import { CommunitiesPageComponent } from "./components/main-landing-page/left-side-navbar/communities-page/communities-page.component";
import { FaqsPageComponent } from "./components/main-landing-page/left-side-navbar/faqs-page/faqs-page.component";
import { GroupsPageComponent } from "./components/main-landing-page/left-side-navbar/groups-page/groups-page.component";
import { TagsPageComponent } from "./components/main-landing-page/left-side-navbar/tags-page/tags-page.component";
import { BadgesPageComponent } from "./components/main-landing-page/left-side-navbar/badges-page/badges-page.component";

import { AllUsersPageComponent } from "./components/main-landing-page/left-side-navbar/user-page/all-users-page/all-users-page.component";
import { UserProfilePageComponent } from "./components/main-landing-page/left-side-navbar/user-page/user-profile-page/user-profile-page.component";


import { LoginPageComponent } from "./components/main-landing-page/top-navbar/login-page/login-page.component";
import { SignupPageComponent } from "./components/main-landing-page/top-navbar/signup-page/signup-page.component";


import { QuestionPromptPageComponent } from "./components/main-landing-page/right-side-navbar/question-prompt-page/question-prompt-page.component";


import { AllQuestionsPageComponent } from "./components/main-landing-page/middle-renderer/all-questions-page/all-questions-page.component";
import { ViewAnswersPageComponent } from "./components/main-landing-page/middle-renderer/all-questions-page/view-answers-page/view-answers-page.component";
import { SubmitAnswerPageComponent } from "./components/main-landing-page/middle-renderer/all-questions-page/submit-answer-page/submit-answer-page.component";
import { MainLandingPageComponent} from "./components/main-landing-page/main-landing-page.component";




const routes: Routes = [
  { path: '', redirectTo: 'main-landing-page:userId', pathMatch: 'full' },
  // { path: '', redirectTo: 'main-landing-page', pathMatch: 'full' },
  // { path: 'main-landing-page', component: MainLandingPageComponent },
  { path: 'main-landing-page', component: MainLandingPageComponent },
  // { path: ':userId', component: MainLandingPageComponent },
  { path:'communities', component: CommunitiesPageComponent },
  { path:'faqs', component: FaqsPageComponent },
  { path:'groups', component: GroupsPageComponent },
  { path:'tags', component: TagsPageComponent },
  { path:'badges', component: BadgesPageComponent },
  { path:'all-users', component: AllUsersPageComponent },
  { path:'user-profile', component: UserProfilePageComponent},


  { path:'login', component: LoginPageComponent },
  { path:'signup', component: SignupPageComponent },


  { path:'question-prompt', component: QuestionPromptPageComponent },


  { path:'all-questions', component: AllQuestionsPageComponent },
  { path:'view-answers', component: ViewAnswersPageComponent },
  { path:'submit-answer', component: SubmitAnswerPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

