import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitiesPageComponent } from './communities-page.component';

describe('CommunitiesPageComponent', () => {
  let component: CommunitiesPageComponent;
  let fixture: ComponentFixture<CommunitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunitiesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
