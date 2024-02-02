import { CanActivateFn, Router } from '@angular/router';
import  { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  return (localStorage['current_admin']) ? true : router.navigate(['/admin-login']);
};
