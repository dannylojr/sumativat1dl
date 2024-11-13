import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-secundario',
  standalone: true,
  templateUrl: './btn-secundario.component.html',
  styleUrls: ['./btn-secundario.component.css']
})
export class BtnSecundarioComponent {
  @Output() sizeChange = new EventEmitter<void>(); // Emite un evento al hacer clic

  onClick() {
    this.sizeChange.emit(); // Emitir el evento al hacer clic
  }
}