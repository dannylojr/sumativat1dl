import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Output() passwordChange = new EventEmitter<{ password: string; errorMessage: string ; errorClass: string}>();  
  password: string = '';
  errorMessage: string = '';
  errorClass: string = ''; // Clase de error para estilos dinámicos

  onPasswordInput(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
    this.validatePassword();
    this.passwordChange.emit({ password: this.password, errorMessage: this.errorMessage, errorClass: this.errorClass  });
  }
  validatePassword(): void {
    const lengthValid = this.password.length >= 8;
    const hasLetter = /[A-Za-z]/.test(this.password);
    const hasNumber = /\d/.test(this.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    this.errorClass = 'error';
    if (!lengthValid) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
      this.errorClass = 'error-weak'; // Clase para contraseña débil
    } else if (!hasLetter || !hasNumber) {
      this.errorMessage = 'La contraseña es débil. Debe contener letras y números.';
      this.errorClass = 'error-weak'; // Clase para contraseña débil
    } else if (hasLetter && hasNumber && hasSpecialChar) {
      this.errorMessage = 'La contraseña es fuerte.';
      this.errorClass = 'error-strong'; // Clase para contraseña fuerte
    } else {
      this.errorMessage = 'La contraseña es media. Intenta agregar caracteres especiales para mejorarla.';
      this.errorClass = 'error-medium'; // Clase para contraseña media
    }
  }
}