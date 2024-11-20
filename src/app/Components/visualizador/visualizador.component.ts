import { NgStyle } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  templateUrl: './visualizador.component.html',
  imports: [NgStyle],
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() color: string = 'white';
  @Input() size: number = 100;
  @Input() email: string = '';
  @Input() password: string = '';
  @Input() text: string = '';
  @Input() visualizadorMensaje: string = ''; // Añadido para mostrar el mensaje
}