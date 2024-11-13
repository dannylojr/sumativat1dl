import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() color: string | undefined; // Recibe el color desde el padre
  @Input() size: number = 100; // Tamaño inicial del cuadrado

  get squareStyle() {
    return {
      'width.px': this.size,
      'height.px': this.size,
      'background-color': this.color || 'white',
    };
  }
}