// Importaciones necesarias de Angular
import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

// Decorador del componente
@Component({
  selector: 'app-password',              
  standalone: true,                      
  imports: [NgIf, NgClass],             
  templateUrl: './password.component.html', 
  styleUrls: ['./password.component.css']  
})
export class PasswordComponent {
  @Output() passwordChange = new EventEmitter<{ password: string; errorMessage: string; errorClass: string }>(); // Evento para emitir cambios en la contraseña
  password: string = '';                   // Almacena el valor de la contraseña ingresada
  errorMessage: string = '';                // Almacena el mensaje de error
  errorClass: string = '';                  // Clase de error para estilos dinámicos

  // Método que se llama al ingresar texto en el campo de contraseña
  onPasswordInput(event: Event): void {
    this.password = (event.target as HTMLInputElement).value; // Obtiene el valor del input
    this.validatePassword(); // Valida la contraseña ingresada
    // Emite el nuevo valor, mensaje de error y clase de error
    this.passwordChange.emit({ password: this.password, errorMessage: this.errorMessage, errorClass: this.errorClass });
  }

  // Método para validar la fortaleza de la contraseña
  validatePassword(): void {
    const lengthValid = this.password.length >= 8; // Verifica si la longitud es válida
    const hasLetter = /[A-Za-z]/.test(this.password); // Verifica si contiene letras
    const hasNumber = /\d/.test(this.password); // Verifica si contiene números
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.password); // Verifica si contiene caracteres especiales

    this.errorClass = 'error'; // Clase por defecto para errores

    // Validaciones de la contraseña
    if (this.password.length === 0) {
      this.errorMessage = 'El campo de contraseña no puede estar vacío.'; // Mensaje si está vacío
    } else if (!lengthValid) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.'; // Mensaje si la longitud es insuficiente
      this.errorClass = 'error-weak'; // Clase para contraseña débil
    } else if (!hasLetter || !hasNumber) {
      this.errorMessage = 'La contraseña es débil. Debe contener letras y números.'; // Mensaje si falta letra o número
      this.errorClass = 'error-weak'; // Clase para contraseña débil
    } else if (hasLetter && hasNumber && hasSpecialChar) {
      this.errorMessage = 'La contraseña es fuerte.'; // Mensaje si la contraseña es fuerte
      this.errorClass = 'error-strong'; // Clase para contraseña fuerte
    } else {
      this.errorMessage = 'La contraseña es media. Intenta agregar caracteres especiales para mejorarla.'; // Mensaje si la contraseña es media
      this.errorClass = 'error-medium'; // Clase para contraseña media
    }
  }
}