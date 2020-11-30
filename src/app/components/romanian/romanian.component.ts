import { Component } from '@angular/core';
import { convertToRoman } from './romaScript';
@Component({
  selector: 'app-romanian',
  templateUrl: './romanian.component.html',
  styleUrls: ['./romanian.component.css'],
})
export class RomanianComponent {
  constructor() {}

  // slider
  output = 'Do Something';
  constraints = [1, 10000];
  onChange(value: number): void {
    this.output = convertToRoman(value);
  }
}
