import { Component } from '@angular/core';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent, VisualizadorComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple']; // Colores disponibles
  currentColor: string = 'white'; // Color actual por defecto
  size: number = 100; // Tamaño inicial

  // Método para cambiar el color aleatoriamente
  changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length); // Selecciona un índice aleatorio
    this.currentColor = this.colors[randomIndex]; // Cambia el color
  }

  // Método para incrementar el tamaño
  incrementSize() {
    this.size += 50; // Aumentar el tamaño en 50px
    setTimeout(() => {
      this.size -= 50; // Volver al tamaño original después de 300ms
    }, 300);
  }
}