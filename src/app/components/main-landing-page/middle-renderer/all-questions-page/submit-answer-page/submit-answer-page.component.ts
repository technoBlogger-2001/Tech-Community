import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllQuestionsService } from "../../../../../services/all-questions-service/all-questions.service";
import { Router } from "@angular/router";
import { StorageService } from "../../../../../services/storage.service";
import { LoadersService } from "../../../../../services/loaders/loaders.service";
import { AlertService } from "../../../../../services/alert/alert.service";

@Component({
  selector: 'app-submit-answer-page',
  templateUrl: './submit-answer-page.component.html',
  styleUrl: './submit-answer-page.component.css'
})
export class SubmitAnswerPageComponent implements OnInit {

  ckEditorConfig: any = { toolbar: [
      ['Source', 'Templates', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'CopyFormatting', 'RemoveFormat'],
      [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
      [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ],
      [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ],
      [ 'Link', 'Unlink', 'Anchor' ],
      [ 'Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ],
      [ 'Styles', 'Format', 'Font', 'FontSize' ],
      [ 'TextColor', 'BGColor' ],
      [ 'Maximize', 'ShowBlocks' ]
    ] };

  ckeditorContent: any;

  submitForm: FormGroup;
  QuestionData: any[] = [];
  questionHeader:any;


  constructor(private allQuestionsService: AllQuestionsService,
              private fb: FormBuilder,
              private router: Router,
              private storageService: StorageService,
              public loaderService: LoadersService,
              public alertService: AlertService) {
    this.submitForm = this.fb.group({
      Answer: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit(): void {
    this.SubmitAnswerToQuestion();
  }

  SubmitAnswerToQuestion() {
    this.allQuestionsService.AnswerData$.subscribe((data: any) => {
      this.questionHeader = data;
      console.log("In Submit Answer Page", this.questionHeader);
    })
  }

  FinalAnswerSubmit() {

    if(this.submitForm.invalid) {
      console.warn('Please fill in all required fields.');
      return;
    }
    console.log("=========", this.questionHeader);
    console.log("I am here In Final Submission")
    const data = {
      Question_Id: this.questionHeader.Question_Id,
      Answer: this.submitForm.value['Answer'],
      Created_By: this.storageService.secureStorage.getItem("employeeTokenId")
    };

    console.log(data);

    this.allQuestionsService.submitAnswerToQuestion(data).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['view-answers']);
      },
      (error: any) => {
        console.log(error);
      })

  }

}
