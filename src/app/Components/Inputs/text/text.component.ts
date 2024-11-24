import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Output() textChange = new EventEmitter<string>(); // Evento para emitir cambios en el texto
  text: string = '';                             // Almacena el valor del texto ingresado

  // Método que se llama al ingresar texto en el campo
  onTextInput(event: Event): void {
    this.text = (event.target as HTMLInputElement).value; // Obtiene el valor del input
    this.textChange.emit(this.text); // Emite el nuevo valor del texto
  }
}