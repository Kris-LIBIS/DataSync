// Author: Kris Dekeyser @ KU Leuven (2023). Apache 2.0 License
// Changed by: Eryk Kulikowski @ KU Leuven (2023). Apache 2.0 License

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
