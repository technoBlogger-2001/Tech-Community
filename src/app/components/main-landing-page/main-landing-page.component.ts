import { Component, OnInit } from '@angular/core';
import { UserProfileService } from "../../services/user-profile-service/user-profile.service";
import { UserIdService } from "../../services/user-id/user-id.service";
import { StorageService } from "../../services/storage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadersService } from "../../services/loaders/loaders.service";

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrl: './main-landing-page.component.css'
})
export class MainLandingPageComponent implements OnInit {

  isSticky: boolean = false;

  constructor(public userProfileService: UserProfileService,
              private userIdService: UserIdService,
              private storageService: StorageService,
              private router: ActivatedRoute,
              public loaderService: LoadersService) {}

  userId: any;
  ngOnInit(): void {
    const value = window.sessionStorage.getItem('userID');

    if (value !== null) {
      this.getUdaanUserData();
    } 
  }



  getUdaanUserData() {
    let userId = this.userId

    console.log("getUdaanUserData...", userId);
    if (userId.toLowerCase().startsWith("e")) {
      userId = this.userId.substring(
          4,
          this.userId.length
        );
    }
    var data = {
      userId,
    };

    this.userIdService.getUdaanUserData(data).subscribe((data: any) => {
      if (data["error"] == "true") {
        console.log("Error");
      } else {
        console.log("==========", data);
        if (data["data"][0]) {
          this.storageService.secureStorage.setItem(
            "p_image",
            data["data"][0]["Emp_Photo"]
          );
          this.storageService.secureStorage.setItem(
            "division_id",
            data["data"][0]["division_id"]
          );

          this.storageService.secureStorage.setItem(
            "Id",
            data["data"][0]["id"]
          );

          this.storageService.secureStorage.setItem(
            "employeeTokenId",
            data["data"][0]["token"]
          );
          this.storageService.secureStorage.setItem(
            "designation_name",
            data['data'][0]["designation_name"]
          );
          this.storageService.secureStorage.setItem(
            "vendor_code",
            data['data'][0]["vendor_code"]
          );
          this.storageService.secureStorage.setItem(
            "customer_code",
            data['data'][0]["customer_code"]
          );
          this.storageService.secureStorage.setItem(
            "Emp_Photo",
            data['data'][0]["Emp_Photo"]
          );
        }
      }
    });
  }
}
