import { Component } from '@angular/core';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { NgIf } from '@angular/common';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent, BtnAceptarComponent, VisualizadorComponent, EmailComponent, PasswordComponent, TextComponent, BtnCancelarComponent, NgIf],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  currentColor: string = 'white';
  size: number = 100;

  email: string = '';
  password: string = '';
  text: string = '';
  errorMessage: string = '';

  visualizadorColor: string = 'white';
  visualizadorMensaje: string = '';

  // Método para cambiar el color aleatoriamente
  changeColor(): void {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[randomIndex];
  }

  // Método para manejar el evento de clic del botón primario
  onChangeColorClick(): void {
    this.changeColor(); // Cambiar el color
  }

  // Método para incrementar el tamaño
  incrementSize(): void {
    this.size += 50;
    setTimeout(() => {
      this.size -= 50;
    }, 300);
  }

  // Método para mostrar los datos en el visualizador
  onAceptarClick(): void {
    this.currentColor = 'green'; // Cambiar el color del visualizador a verde
    this.visualizadorMensaje = 'Enviado con éxito'; // Mostrar mensaje en el visualizador
  }
  onCancelarClick(): void {
    this.currentColor = 'red'; // Cambiar el color a rojo (o cualquier color que desees)
    this.visualizadorMensaje = 'Se ha cancelado el proceso'; // Cambiar el mensaje
  }
  // Métodos para recibir datos de los componentes hijos
  onEmailChange(email: string): void {
    this.email = email;
  }

  onPasswordChange(password: string): void {
    this.password = password;
  }

  onTextChange(text: string): void {
    this.text = text;
  }
}