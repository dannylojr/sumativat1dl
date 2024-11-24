// Importaciones necesarias de Angular
import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',             
  standalone: true,                
  imports: [NgIf],                
  templateUrl: './email.component.html', 
  styleUrls: ['./email.component.css']  
})
export class EmailComponent {
  @Output() emailChange = new EventEmitter<{ email: string; errorMessage: string }>(); // Evento para emitir cambios en el email
  email: string = '';                  // Almacena el valor del email ingresado
  errorMessage: string = '';           // Almacena el mensaje de error

  // Método que se llama al ingresar texto en el campo de email
  onEmailInput(event: Event): void {
    this.email = (event.target as HTMLInputElement).value; // Obtiene el valor del input
    this.validateEmail(); // Valida el email ingresado
    this.emailChange.emit({ email: this.email, errorMessage: this.errorMessage }); // Emite el nuevo valor y mensaje de error
  }

  // Método para validar el formato del email
  validateEmail(): void {
    const atIndex = this.email.indexOf('@'); // Encuentra la posición del '@'
    const dotIndex = this.email.lastIndexOf('.'); // Encuentra la posición del último '.'
    
    // Validaciones del email
    if (this.email.length === 0) {
      this.errorMessage = 'El campo de email no puede estar vacío.'; // Mensaje si está vacío
    } else if (atIndex === -1) {
      this.errorMessage = 'El email debe contener un "@"'; // Mensaje si falta '@'
    } else if (dotIndex === -1) {
      this.errorMessage = 'El email debe contener un "."'; // Mensaje si falta '.'
    } else if (atIndex > dotIndex) {
      this.errorMessage = 'El "@" debe ir antes del "."'; // Mensaje si '@' está después de '.'
    } else {
      this.errorMessage = ''; // Email válido, no hay error
    }
  }
}