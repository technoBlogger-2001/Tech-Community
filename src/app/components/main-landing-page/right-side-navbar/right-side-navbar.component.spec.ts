import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideNavbarComponent } from './right-side-navbar.component';

describe('RightSideNavbarComponent', () => {
  let component: RightSideNavbarComponent;
  let fixture: ComponentFixture<RightSideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSideNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
