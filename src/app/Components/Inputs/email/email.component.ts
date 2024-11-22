import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  imports:[NgIf],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Output() emailChange = new EventEmitter< {email: string; errorMessage: string }>();
  email: string = '';
  errorMessage: string = '';

  onEmailInput(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
    this.validateEmail();
    this.emailChange.emit({ email: this.email, errorMessage: this.errorMessage });  
  }
  validateEmail(): void {
    const atIndex = this.email.indexOf('@');
    const dotIndex = this.email.lastIndexOf('.');
    if (this.email.length === 0) {
      this.errorMessage = 'El campo de email no puede estar vacío.';
    } else if (atIndex === -1) {
      this.errorMessage = 'El email debe contener un "@"';
    } else if (dotIndex === -1) {
      this.errorMessage = 'El email debe contener un "."';
    } else if (atIndex > dotIndex) {
      this.errorMessage = 'El "@" debe ir antes del "."';
    } else {
      this.errorMessage = ''; // Email válido
    }
  }
}