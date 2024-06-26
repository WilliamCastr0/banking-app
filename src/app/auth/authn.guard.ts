import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthnService } from './authn.service';

export const authnGuard = async () => {
  const router = inject(Router);
  const authnService = inject(AuthnService);
  const isLoggedIn = await authnService.isLoggedIn();

  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
