import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Aside } from './componentes/aside/aside';
import { Main } from './componentes/main/main';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Aside, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practica-examen');
}
