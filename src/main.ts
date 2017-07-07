import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var skel: any;
skel.breakpoints({
  xlarge: '(max-width: 1680px)',
  large: '(max-width: 1280px)',
  medium: '(max-width: 980px)',
  small: '(max-width: 736px)',
  xsmall: '(max-width: 480px)'
});

platformBrowserDynamic().bootstrapModule(AppModule);
