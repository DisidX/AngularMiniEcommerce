import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig) //App esta aqui que viene de app.ts
  .catch((err) => console.error(err));


  //1 EN LEEERSE