import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-inicio',
  imports: [Header, Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
