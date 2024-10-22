import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPromptPageComponent } from './question-prompt-page.component';

describe('QuestionPromptPageComponent', () => {
  let component: QuestionPromptPageComponent;
  let fixture: ComponentFixture<QuestionPromptPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionPromptPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuestionPromptPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
