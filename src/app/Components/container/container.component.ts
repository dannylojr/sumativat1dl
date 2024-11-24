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

/**
 * Componente principal que actúa como contenedor para otros componentes,
 * permite la interacción del usuario y la visualización de mensajes.
 */
@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent, BtnAceptarComponent, VisualizadorComponent, 
    EmailComponent, PasswordComponent, TextComponent, BtnCancelarComponent, NgIf, BtnNightComponent,
    NgClass], //Importamos a los componentes hijos
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // Lista de colores disponibles para el visualizador
  colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan'];
  
  // Color actual del visualizador
  currentColor: string = 'white';
  
  // Tamaño actual del visualizador
  size: number = 150;
  
  // Cantidad a incrementar el tamaño
  incrementAmount: number = 50;
  
  // Duración de la animación en milisegundos
  animationDuration: number = 300;
  
  // Tamaño máximo permitido para el visualizador
  maxSize: number = 300;
  
  // Tamaño original para restablecer
  originalSize: number = this.size;

  // Propiedades para almacenar datos de entrada del usuario
  email: string = '';
  password: string = '';
  text: string = '';
  errorMessage: string = '';

  // Propiedades para el visualizador
  visualizadorColor: string = 'white';
  visualizadorMensaje: string = '';

  // Propiedad para almacenar el estado de validación del email
  validateEmail: string = '';

  // Propiedad para controlar el modo oscuro
  isDarkMode: boolean = false;

  /**
   * Cambia el color del visualizador a un color aleatorio de la lista de colores.
   */
  changeColor(): void {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.visualizadorColor = this.colors[randomIndex]; // Cambia el color del visualizador
  }

  /**
   * Incrementa el tamaño del visualizador, hasta un tamaño máximo.
   * Si se alcanza el tamaño máximo, se restablece al tamaño original después de una animación.
   */
  incrementSize(): void {
    if (this.size < this.maxSize) {
      this.size += this.incrementAmount; // Incrementar el tamaño
    }
    if (this.size >= this.maxSize) {
      setTimeout(() => {
        this.size = this.originalSize; // Volver al tamaño original
      }, this.animationDuration);
    }
  }

  /**
   * Maneja el evento de clic en el botón "Aceptar".
   * Cambia el color del visualizador a verde y muestra un mensaje de éxito.
   */
  onAceptarClick(): void {
    this.visualizadorColor = 'green'; // Cambiar el color del visualizador a verde
    this.visualizadorMensaje = 'Enviado con éxito'; // Mostrar mensaje en el visualizador
  }

  /**
   * Maneja el evento de clic en el botón "Cancelar".
   * Cambia el color del visualizador a rojo y muestra un mensaje de cancelación.
   */
  onCancelarClick(): void {
    this.visualizadorColor = 'red'; // Cambiar el color a rojo
    this.visualizadorMensaje = 'Se ha cancelado el proceso'; // Cambiar el mensaje
  }

  /**
   * Método para recibir datos del componente hijo de email.
   */
  onEmailChange({ email, errorMessage }: { email: string; errorMessage: string }): void {
    this.email = email
    this.errorMessage = errorMessage; // Actualiza el mensaje de error del email
  }

  /**
   * Método para recibir datos del componente hijo de contraseña.
   */
  onPasswordChange({ password, errorMessage }: { password: string; errorMessage: string }): void {
    this.password = password;
    this.errorMessage = errorMessage; // Actualiza el mensaje de error de la contraseña
  }

  /**
   * Método para recibir datos del componente hijo de texto.
   */
  onTextChange(text: string): void {
    this.text = text; // Almacena el texto ingresado
  }

  /**
   * Método para limpiar el mensaje del visualizador.
   */
  clearMessage(): void {
    this.visualizadorMensaje = ''; // Limpiar el mensaje del visualizador
  }

  /**
   * Método para alternar el modo oscuro en la aplicación.
   * Cambia la clase CSS del cuerpo del documento para aplicar estilos de modo oscuro.
   */
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode; // Alternar el estado del modo oscuro
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Aplicar la clase 'dark-mode' al cuerpo
  }
}