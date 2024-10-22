import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from "../../../services/user-profile-service/user-profile.service";
import { LoadersService } from "../../../services/loaders/loaders.service";

@Component({
  selector: 'app-left-side-navbar',
  templateUrl: './left-side-navbar.component.html',
  styleUrl: './left-side-navbar.component.css'
})
export class LeftSideNavbarComponent {
  isQuestionsCollapsed: boolean = false;
  isMostAnsweredCollapsed: boolean = false;
  isUserCollapsed: boolean = false;

  constructor(public userProfileService: UserProfileService,
              private router: Router,
              public loaderService: LoadersService) {}

  OpenUserProfile(): void {
    this.router.navigate(['user-profile']);
  }
}
