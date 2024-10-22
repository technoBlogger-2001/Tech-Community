import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostVisitedPageComponent } from './most-visited-page.component';

describe('MostVisitedPageComponent', () => {
  let component: MostVisitedPageComponent;
  let fixture: ComponentFixture<MostVisitedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostVisitedPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostVisitedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
