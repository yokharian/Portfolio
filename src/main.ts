// / <reference types="@angular/localize" />
import {Amplify} from 'aws-amplify';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import awsExports from '../src/aws-exports';
import {environment} from './environments/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
  enableProdMode();
}

Amplify.configure({ ...awsExports});

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
