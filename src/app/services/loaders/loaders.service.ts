import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadersService {
  isLoading: boolean = false;
  progressValue: number = 0;

  constructor(private router: Router) { }

  startLoading() {
    this.isLoading = true;
    this.progressValue = 0;
  }

  stopLoading() {
    this.isLoading = false;
    this.progressValue = 0;
  }

  updateProgress(value: number) {
    this.progressValue = value;
    if (this.progressValue >= 100) {
      this.progressValue = 100;
    }
  }

  triggerLoading(): Promise<void> {
    return new Promise((resolve) => {
      // Start loading spinner
      this.startLoading();

      // Delay the start of progress bar to ensure loading spinner is visible
      setTimeout(() => {
        const interval = setInterval(() => {
          // Increment progress value
          this.updateProgress(this.progressValue + 25);

          if (this.progressValue >= 100) {
            // Stop loading process when progress reaches 100%
            this.stopLoading();
            clearInterval(interval);
            resolve(); // Resolve the Promise when loading is complete
          }
        }, 500);
      }, 500); // Adjust this delay as needed
    });
  }

  NavigateToSelectedUrl(url: string) {
    this.triggerLoading().then(() => {
      this.router.navigate([url]);
    });
  }


}
