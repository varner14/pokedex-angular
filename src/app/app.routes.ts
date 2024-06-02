import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.routes').then((m) => m.HOME_ROUTES),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
