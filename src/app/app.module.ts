import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from "ckeditor4-angular";


import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';


import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MainLandingPageComponent } from './components/main-landing-page/main-landing-page.component';
import { TopNavbarComponent } from './components/main-landing-page/top-navbar/top-navbar.component';
import { LeftSideNavbarComponent } from './components/main-landing-page/left-side-navbar/left-side-navbar.component';
import { RightSideNavbarComponent } from './components/main-landing-page/right-side-navbar/right-side-navbar.component';
import { MiddleRendererComponent } from './components/main-landing-page/middle-renderer/middle-renderer.component';


import { AboutUsPageComponent } from './components/main-landing-page/top-navbar/about-us-page/about-us-page.component';
import { BlogPageComponent } from './components/main-landing-page/top-navbar/blog-page/blog-page.component';
import { ContactUsPageComponent } from './components/main-landing-page/top-navbar/contact-us-page/contact-us-page.component';
import { PagesPageComponent } from './components/main-landing-page/top-navbar/pages-page/pages-page.component';
import { LoginPageComponent } from "./components/main-landing-page/top-navbar/login-page/login-page.component";
import { SignupPageComponent } from "./components/main-landing-page/top-navbar/signup-page/signup-page.component";

import { HomePageComponent } from "./components/main-landing-page/left-side-navbar/home-page/home-page.component";
import { QuestionsPageComponent } from './components/main-landing-page/left-side-navbar/questions-page/questions-page.component';
import { CommunitiesPageComponent } from './components/main-landing-page/left-side-navbar/communities-page/communities-page.component';
import { MostAnsweredPageComponent } from './components/main-landing-page/left-side-navbar/most-answered-page/most-answered-page.component';
import { UnansweredPageComponent } from './components/main-landing-page/left-side-navbar/unanswered-page/unanswered-page.component';
import { MostVisitedPageComponent } from './components/main-landing-page/left-side-navbar/most-visited-page/most-visited-page.component';
import { PollsPageComponent } from './components/main-landing-page/left-side-navbar/polls-page/polls-page.component';
import { FaqsPageComponent } from './components/main-landing-page/left-side-navbar/faqs-page/faqs-page.component';
import { GroupsPageComponent } from './components/main-landing-page/left-side-navbar/groups-page/groups-page.component';
import { EducationPageComponent } from './components/main-landing-page/left-side-navbar/education-page/education-page.component';
import { TechnologyPageComponent } from './components/main-landing-page/left-side-navbar/technology-page/technology-page.component';
import { TagsPageComponent } from './components/main-landing-page/left-side-navbar/tags-page/tags-page.component';
import { BadgesPageComponent } from './components/main-landing-page/left-side-navbar/badges-page/badges-page.component';
import { UserPageComponent } from './components/main-landing-page/left-side-navbar/user-page/user-page.component';
import { AllUsersPageComponent } from './components/main-landing-page/left-side-navbar/user-page/all-users-page/all-users-page.component';


import { QuestionPromptPageComponent } from './components/main-landing-page/right-side-navbar/question-prompt-page/question-prompt-page.component';

import { AllQuestionsPageComponent } from './components/main-landing-page/middle-renderer/all-questions-page/all-questions-page.component';
import { UserProfilePageComponent } from './components/main-landing-page/left-side-navbar/user-page/user-profile-page/user-profile-page.component';
import { EditProfilePageComponent } from './components/main-landing-page/left-side-navbar/user-page/user-profile-page/edit-profile-page/edit-profile-page.component';
import { ViewAnswersPageComponent } from './components/main-landing-page/middle-renderer/all-questions-page/view-answers-page/view-answers-page.component';
import { SubmitAnswerPageComponent } from './components/main-landing-page/middle-renderer/all-questions-page/submit-answer-page/submit-answer-page.component';
import { SpinnerComponent } from './components/common-components/spinner/spinner.component';
import { AlertComponent } from './components/common-components/alert/alert.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLandingPageComponent,
    TopNavbarComponent,
    LeftSideNavbarComponent,
    RightSideNavbarComponent,
    MiddleRendererComponent,
    QuestionPromptPageComponent,
    AboutUsPageComponent,
    BlogPageComponent,
    ContactUsPageComponent,
    PagesPageComponent,
    HomePageComponent,
    QuestionsPageComponent,
    CommunitiesPageComponent,
    MostAnsweredPageComponent,
    UnansweredPageComponent,
    MostVisitedPageComponent,
    PollsPageComponent,
    FaqsPageComponent,
    GroupsPageComponent,
    EducationPageComponent,
    TechnologyPageComponent,
    TagsPageComponent,
    BadgesPageComponent,
    UserPageComponent,
    AllQuestionsPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    AllUsersPageComponent,
    UserProfilePageComponent,
    EditProfilePageComponent,
    ViewAnswersPageComponent,
    SubmitAnswerPageComponent,
    SpinnerComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    NgbModule,
    HttpClientModule,
    CKEditorModule,
    AppRoutingModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
