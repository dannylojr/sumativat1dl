import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './Components/container/container.component';
import { NgClass } from '@angular/common';
import { BtnNightComponent } from './Components/Botones/btn-night/btn-night.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Galería de Componentes';
}
