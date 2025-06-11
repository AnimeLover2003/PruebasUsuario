import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from '../header/header-momentos/header-momentos.component';
import { InputComponent } from '../input/input.component';
import { CheckboxTextComponent } from '../Checkbox/CheckboxText/CheckboxText.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-base-card',
  standalone: true,  
  imports: [CommonModule, HeaderMomentosComponent, InputComponent, CheckboxTextComponent, ButtonComponent],
  templateUrl: './base-card.component.html',
  styleUrl: './base-card.component.scss'
})
export class BaseCardComponent {
  
}