import { TestBed } from '@angular/core/testing';

import { RightSideNavbarService } from './right-side-navbar.service';

describe('RightSideNavbarService', () => {
  let service: RightSideNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightSideNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
