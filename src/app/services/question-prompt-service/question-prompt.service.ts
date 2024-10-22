import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class QuestionPromptService {

  constructor(private http: HttpClient) { }

  GetCategory() {
    return this.http.post(environment.apiUrl + "bfl-community/question/getCategoryList", null);
  }

  // SelectedCategory(Category_Id: number) {
  //   return this.http.post(`${this.categoryUrl}`, { Category_Id });
  // }

  PostForm(formData: any) {
    return this.http.post(environment.apiUrl + "bfl-community/question/saveQuestionData", formData);
  }
}
