import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { AuthnInterceptor } from './interceptors/jwt.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthnInterceptor,
      multi: true,
    },
  ],
};
