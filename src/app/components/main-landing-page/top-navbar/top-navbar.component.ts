import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";

import { UserProfileService } from "../../../services/user-profile-service/user-profile.service";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  constructor(public dialog: MatDialog, public userProfileService: UserProfileService) {}

  // showSpinner(): void {
  //   this.spinnerService.showSpinner();
  //   // Your async operation here
  //   setTimeout(() => {
  //     this.spinnerService.hideSpinner();
  //   }, 3000);
  // }


  openLoginDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginPageComponent, {
      width: '500px',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openSignupDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SignupPageComponent, {
      width: '500px',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
