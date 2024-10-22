import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAnsweredPageComponent } from './most-answered-page.component';

describe('MostAnsweredPageComponent', () => {
  let component: MostAnsweredPageComponent;
  let fixture: ComponentFixture<MostAnsweredPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostAnsweredPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostAnsweredPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
