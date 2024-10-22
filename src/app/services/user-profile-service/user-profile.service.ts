import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  isUserProfileVisible: boolean = false;
  constructor() { }

  OpenUserProfilePage(): void {
    this.isUserProfileVisible = !this.isUserProfileVisible;
  }
}
