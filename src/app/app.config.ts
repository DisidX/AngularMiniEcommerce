import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};


/*
Es el cerebro de tu aplicación en el lado del cliente. Aquí es donde configuras los proveedores (providers), como el router, las peticiones HTTP o las animaciones, reemplazando lo que antes se hacía en el AppModule.
*/