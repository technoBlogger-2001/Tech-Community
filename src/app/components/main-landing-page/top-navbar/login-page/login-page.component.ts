import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginServiceService } from "../../../../services/login-service/login-service.service";
import * as CryptoJS from "crypto-js";
import { SignupPageComponent } from "../signup-page/signup-page.component";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm: FormGroup;

  isloggedIn: boolean = false;

  message: string = "";
  invalid: boolean = false;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginPageComponent>, private fb: FormBuilder, private loginService: LoginServiceService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      type: ['', Validators.required],
    })
  }

  openSignupDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(SignupPageComponent, {
      width: '500px',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  handleInnerSignupButton(): void {
    this.openSignupDialog('3000ms', '1500ms');
    this.closeLoginForm();
  }

  closeLoginForm(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.loginService.loginUser({
      'username': CryptoJS.AES.encrypt(this.loginForm.value.username, 'ATFTUSER').toString(),
      'password': CryptoJS.AES.encrypt(this.loginForm.value.password, 'ATFTPASS').toString(),
      'type': 1,
    }).subscribe(
      (data: any) => {
        if (data["error"] == false) {
          // Successful login
          var bytes = CryptoJS.AES.decrypt(data["Empdata"], "KTL@123456");
          var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          this.isloggedIn = true;

          if (decryptedData["emp_role"] == "Power User") {
            this.invalid = true;
            this.message = "Invalid";
            setTimeout(() => {
              this.invalid = false;
            }, 3000);
          } else if (decryptedData["emp_role"] == "End User") {
            console.log("End User");
            // Navigate to the desired route
          }

          // Close the login dialog window after a delay
          setTimeout(() => {
            this.closeLoginForm();
          }, 2000); // Adjust the delay as needed
        } else if (data["response"]) {
          this.invalid = true;
          this.message = data["message"];
          setTimeout(() => {
            this.invalid = false;
          }, 3000);
        }
      },
      (error) => {
        this.invalid = true;
        this.message = "Please try again!";
        setTimeout(() => {
          this.invalid = false;
        }, 3000);
      }
    );
  }

}
