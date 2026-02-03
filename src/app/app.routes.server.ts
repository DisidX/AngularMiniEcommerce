import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];


/*
Es una configuración avanzada de Angular 19 para manejar cómo el servidor debe tratar ciertas rutas (por ejemplo, si una ruta debe ser estática o renderizarse en tiempo real).
*/
