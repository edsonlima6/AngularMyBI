import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { auth_Interceptor } from './auth_Interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: auth_Interceptor, multi: true },
];