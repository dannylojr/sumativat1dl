import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  @Output() click = new EventEmitter<void>(); // Emite un evento al hacer clic

  onClick() {
    this.click.emit(); // Emitir el evento al hacer clic
  }
}