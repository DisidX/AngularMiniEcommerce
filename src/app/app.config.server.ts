import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

/*
Similar al anterior, pero contiene la configuración específica para cuando la aplicación se ejecuta en el servidor (SSR). Fusiona la configuración del cliente con la necesaria para el entorno Node.js.
*/