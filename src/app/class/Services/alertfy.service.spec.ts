import { TestBed } from '@angular/core/testing';

import { AlertfyService } from './alertfy.service';

describe('AlertfyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertfyService = TestBed.get(AlertfyService);
    expect(service).toBeTruthy();
  });
});
