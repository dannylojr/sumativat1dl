// src/app/Components/Botones/btn-cancelar/btn-cancelar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cancelar',
  standalone: true,
  templateUrl: './btn-cancelar.component.html',
  styleUrls: ['./btn-cancelar.component.css']
})
export class BtnCancelarComponent {
  @Output() click = new EventEmitter<void>(); // Emite un evento al hacer clic

  onClick() {
    this.click.emit(); // Emitir el evento al hacer clic
  }
}