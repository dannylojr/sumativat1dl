import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-night',
  standalone: true,
  imports: [],
  templateUrl: './btn-night.component.html',
  styleUrl: './btn-night.component.css'
})
export class BtnNightComponent {
  @Output() toggleDarkMode  = new EventEmitter<void>(); // Emite un evento al hacer clic

  onClick(): void {
    this.toggleDarkMode .emit(); // Emitir el evento al hacer clic
  }

}
