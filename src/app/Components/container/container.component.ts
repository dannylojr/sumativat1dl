import { Component, EventEmitter } from '@angular/core';
import { BtnPrimarioComponent } from '../Botones/btn-primario/btn-primario.component';
import { BtnSecundarioComponent } from '../Botones/btn-secundario/btn-secundario.component';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [BtnPrimarioComponent, BtnSecundarioComponent, VisualizadorComponent, EmailComponent, PasswordComponent, TextComponent],
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

  // Método para cambiar el color aleatoriamente
  changeColor(): void {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.currentColor = this.colors[randomIndex];
  }

  // Método para incrementar el tamaño
  incrementSize(): void {
    this.size += 50;
    setTimeout(() => {
      this.size -= 50;
    }, 300);
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    this.errorMessage = ''; // Resetear el mensaje de error

    if (!this.email || !this.password || !this.text) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a un servicio
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Text:', this.text);
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