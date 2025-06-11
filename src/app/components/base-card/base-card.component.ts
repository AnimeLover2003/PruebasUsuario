import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-card',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {
  @Input() checked: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}