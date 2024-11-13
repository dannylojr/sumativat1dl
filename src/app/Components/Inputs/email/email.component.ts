import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-email',
  standalone: true,
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  @Output() emailChange = new EventEmitter<string>();
  email: string = '';

  onEmailInput(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
    this.emailChange.emit(this.email);
  }
}