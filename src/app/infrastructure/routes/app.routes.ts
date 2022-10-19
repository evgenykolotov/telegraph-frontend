import { Routes } from '@angular/router';
import { APP_ROUTES_NAMES } from './app-routes-names';

export const APPLICATION_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('../../features/promo/routes/promo.routes').then(r => r.PROMO_ROUTES),
  },
  {
    path: APP_ROUTES_NAMES.MESSAGES,
    loadChildren: () => import('../../features/messenger/routes/messenger.routes').then(r => r.MESSENGER_ROUTES),
  },
  {
    path: APP_ROUTES_NAMES.ACCOUNT,
    loadChildren: () => import('../../features/auth/routes/auth.routes').then(r => r.AUTH_ROUTES),
  },
];
