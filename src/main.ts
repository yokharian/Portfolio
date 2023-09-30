import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

import { AppModule } from './app/app.module';

Amplify.configure(awsExports);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
