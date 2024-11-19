// src/app/Components/Botones/btn-aceptar/btn-aceptar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-aceptar',
  standalone: true,
  templateUrl: './btn-aceptar.component.html',
  styleUrl: './btn-aceptar.component.css'
})
export class BtnAceptarComponent {
  @Output() click = new EventEmitter<void>(); // Emite un evento al hacer clic

  onClick() {
    this.click.emit(); // Emitir el evento al hacer clic
  }
}