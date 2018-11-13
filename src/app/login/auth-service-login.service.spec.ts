import { TestBed } from '@angular/core/testing';

import { AuthServiceLoginService } from './auth-service-login.service';

describe('AuthServiceLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthServiceLoginService = TestBed.get(AuthServiceLoginService);
    expect(service).toBeTruthy();
  });
});
