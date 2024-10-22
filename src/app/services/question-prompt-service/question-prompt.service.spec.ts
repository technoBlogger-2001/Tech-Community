import { TestBed } from '@angular/core/testing';

import { QuestionPromptService } from './question-prompt.service';

describe('QuestionPromptService', () => {
  let service: QuestionPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
