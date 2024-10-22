import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from "../../../../services/alert/alert.service";
import { QuestionPromptService } from "../../../../services/question-prompt-service/question-prompt.service";
import { LoadersService } from "../../../../services/loaders/loaders.service";
import { StorageService } from "../../../../services/storage.service";

@Component({
  selector: 'app-question-prompt-page',
  templateUrl: './question-prompt-page.component.html',
  styleUrl: './question-prompt-page.component.css'
})
export class QuestionPromptPageComponent implements OnInit {
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

  addedQuestion: boolean = false;

  questionForm: FormGroup;
  Categories: any[] = [];
  attachments: File[] = [];

  questionAttachmentControl: FormControl = new FormControl(null);

  constructor(public questionPromptService: QuestionPromptService, private fb: FormBuilder,
              public alertService: AlertService,
              private storageService: StorageService,
              public loaderService: LoadersService) {
    this.questionForm = this.fb.group({
      Question_Title: ['', [Validators.required, Validators.maxLength(100)]],
      Question_Category: ['', Validators.required],
      Question_Tag: ['', [Validators.required, Validators.maxLength(50)]],
      Question_Description: ['', [Validators.required, Validators.maxLength(500)]],
      Question_Attachment: ['']
    });
  }

  ngOnInit() {
    this.getCategory();
  }

  submitForm() {

    if (this.questionForm.invalid) {
      console.warn('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();

    if (this.attachments.length > 0) {
      for (let i = 0; i < this.attachments.length; i++) {
        const lastDot = this.attachments[i].name.lastIndexOf(".");
        const fileName = this.attachments[i].name.substring(0, lastDot);
        const ext = this.attachments[i].name.substring(lastDot + 1);

        console.log("I am here");
        formData.append(
          "Question_Attachment",
          this.attachments[i],
          `${fileName}.${ext}`
        );
      }
    }



    const data = {
      Question_Title: this.questionForm.value['Question_Title'],
      Question_Category: this.questionForm.value['Question_Category'],
      Question_Tag: this.questionForm.value['Question_Tag'],
      Question_Description: this.questionForm.value['Question_Description'],
      Created_By: this.storageService.secureStorage.getItem("employeeTokenId")
    };

    formData.append("data", JSON.stringify(data));

    this.questionPromptService.PostForm(formData).subscribe(
      (response: any) => {
        console.log('Response from backend:', response);
        this.addQuestion();
      },
      (error: any) => {
        console.error('Error sending form data to backend:', error);
      }
    );
  }

  selectAttachments(event: any) {
    const files: FileList | null = event.target.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File = files.item(i) as File;
        this.attachments.push(file);
      }
      this.questionAttachmentControl.setValue(this.attachments);

      // Print file names
      this.attachments.forEach((file: File) => {
        console.log('File Name:', file.name);
      });
    }
  }

  deleteAttachment(file: File): void {
    const index = this.attachments.indexOf(file);
    if (index !== -1) {
      this.attachments.splice(index, 1);
    }
  }


  addQuestion() {
    this.addedQuestion = true;
    setTimeout(() => {
      this.addedQuestion = false;
    }, 1500)
  }





  getCategory() {
    this.questionPromptService.GetCategory().subscribe(
      (response: any) => {
        console.log(response);
        if (response.error === false && response.data) {
          this.Categories = response.data;
        } else {
          console.error('Error fetching categories:', response.message);
        }
      },
      (err: any) => {
        console.error('Error fetching categories:', err);
      }
    );
  }



  // selectCategory(categoryId: number) {
  //   console.log('Selected Category Id:', categoryId);
  //   this.questionPromptService.SelectedCategory(categoryId).subscribe(
  //     (response: any) => {
  //       console.log('Response from backend:', response);
  //     },
  //     (error: any) => {
  //       console.error('Error sending category to backend:', error);
  //     }
  //   );
  // }

}
