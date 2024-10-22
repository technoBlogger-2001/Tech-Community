import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  constructor(public dialogRef: MatDialogRef<SignupPageComponent>) {}

  closeSignupForm(): void {
    this.dialogRef.close();
  }
}
