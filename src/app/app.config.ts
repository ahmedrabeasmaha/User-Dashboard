import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import {provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading/loading.interceptor';
import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
// };

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes),
      provideHttpClient(withInterceptors([loadingInterceptor])),
      provideHttpClient(withFetch())
  ]
};


