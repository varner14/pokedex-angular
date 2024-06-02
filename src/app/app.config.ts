import {
  ApplicationConfig,
  Injectable,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  RouterStateSnapshot,
  TitleStrategy,
  provideRouter,
} from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { Title } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Meu ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    provideAnimationsAsync(),
  ],
};
