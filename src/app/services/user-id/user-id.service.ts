import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StorageService } from "../storage.service";
import { environment } from "../../../environments/environment"


@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  constructor(private storageService: StorageService, private http: HttpClient) { }

  getUdaanUserData(data: any) {
    return this.http.post(environment.apiUrl + "user/getUdaanUserDataForBFLCommunity" ,data);
  }
}
