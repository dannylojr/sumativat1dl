import { Component } from '@angular/core';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component';
import { BtnAceptarComponent } from '../Botones/btn-aceptar/btn-aceptar.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { NgClass, NgIf } from '@angular/common';
import { BtnCancelarComponent } from '../Botones/btn-cancelar/btn-cancelar.component';
import { BtnNightComponent } from '../Botones/btn-night/btn-night.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent, BtnAceptarComponent, VisualizadorComponent, 
    EmailComponent, PasswordComponent, TextComponent, BtnCancelarComponent, NgIf, BtnNightComponent, 
    NgClass],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  currentColor: string = 'white';
  size: number = 150;

  email: string = '';
  password: string = '';
  text: string = '';
  errorMessage: string = '';

  visualizadorColor: string = 'white';
  visualizadorMensaje: string = '';

  // Propiedad para controlar el modo oscuro
  isDarkMode: boolean = false;

  changeColor(): void {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.visualizadorColor = this.colors[randomIndex]; // Cambia el color del visualizador
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
    this.visualizadorColor = 'green'; // Cambiar el color del visualizador a verde
    this.visualizadorMensaje = 'Enviado con éxito'; // Mostrar mensaje en el visualizador
  }

  onCancelarClick(): void {
    this.visualizadorColor = 'red'; // Cambiar el color a rojo
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
  // Método para limpiar el mensaje del visualizador
  clearMessage(): void {
    this.visualizadorMensaje = ''; // Limpiar el mensaje
  }
  
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode; // Alternar el estado del modo oscuro
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}