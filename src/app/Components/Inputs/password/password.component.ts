import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password',
  standalone: true,
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Output() passwordChange = new EventEmitter<string>();
  password: string = '';

  onPasswordInput(event: Event): void {
    this.password = (event.target as HTMLInputElement).value;
    this.passwordChange.emit(this.password);
  }
}