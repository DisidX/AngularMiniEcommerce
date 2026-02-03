import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';

@Component({
  selector: 'app-root',//nombre de mi componernte
  imports: [RouterOutlet],//recursos usados por mi componente
  templateUrl: './app.html',//todo codigo html
  styleUrl: './app.css', //todo codigo css
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  
}
  


 //2 EN LEEERSE