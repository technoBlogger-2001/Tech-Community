import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredPageComponent } from './unanswered-page.component';

describe('UnansweredPageComponent', () => {
  let component: UnansweredPageComponent;
  let fixture: ComponentFixture<UnansweredPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnansweredPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnansweredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
