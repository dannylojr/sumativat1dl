import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Output() textChange = new EventEmitter<string>();
  text: string = '';

  onTextInput(event: Event): void {
    this.text = (event.target as HTMLInputElement).value;
    this.textChange.emit(this.text);
  }
}