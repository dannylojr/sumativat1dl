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
  isDarkMode: boolean = false; // Variable que indica si el modo oscuro está activado

  onClick(): void {
    this.isDarkMode = !this.isDarkMode; // Cambia el estado de isDarkMode a su valor opuesto
    this.toggleDarkMode .emit(); // Emitir el evento al hacer clic
  }
}
