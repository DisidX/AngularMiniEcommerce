import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import { Catalogo } from './pages/catalogo/catalogo';
import { Contacto } from './pages/contacto/contacto';
import { Servicios } from './pages/servicios/servicios';


export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path:'nosotros',component:Nosotros},
    {path:'catalogo',component:Catalogo},
    {path:'contacto',component:Contacto},
    {path:'servicios',component:Servicios},
    {path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    // {path: '**', redirectTo: '', pathMatch: 'full' }
];