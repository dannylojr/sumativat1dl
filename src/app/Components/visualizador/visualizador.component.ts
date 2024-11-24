import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  @Input() color: string = 'white';           // Color de fondo del cuadro, por defecto blanco
  @Input() size: number = 100;                 // Tamaño del cuadro, por defecto 100 píxeles
  @Input() email: string = '';                 // Email ingresado por el usuario
  @Input() password: string = '';              // Contraseña ingresada por el usuario
  @Input() text: string = '';                  // Texto ingresado por el usuario
  @Input() visualizadorMensaje: string = '';   // Mensaje que se mostrará en el cuadro
}