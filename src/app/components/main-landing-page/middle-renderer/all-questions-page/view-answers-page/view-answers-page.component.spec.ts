import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnswersPageComponent } from './view-answers-page.component';

describe('ViewAnswersPageComponent', () => {
  let component: ViewAnswersPageComponent;
  let fixture: ComponentFixture<ViewAnswersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAnswersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAnswersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
