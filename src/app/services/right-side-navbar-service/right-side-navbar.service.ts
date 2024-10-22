import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RightSideNavbarService {

  constructor(private http: HttpClient) { }

  getTopDiscussions() {
    console.log("I am here in right side navbar");
    return this.http.post(environment.apiUrl + "bfl-community/question/getTopDiscussion", null);
  }

  getDashboard() {
    return this.http.post(environment.apiUrl + "bfl-community/question/kpiCount", null);
  }

  getTopMembers() {
    return this.http.post(environment.apiUrl + "bfl-community/question/getTopMembers", null);
  }

  getRecentPost() {
    return this.http.post(environment.apiUrl + "bfl-community/question/getRecentPost", null);
  }
}
