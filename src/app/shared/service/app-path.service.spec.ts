import { TestBed } from '@angular/core/testing';

import { AppPathService } from './app-path.service';

describe('AppPathService', () => {
  let service: AppPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
