import {Component} from '@angular/core';

/**
 * @title Slider that transforms a number into a Roman numeral in real time.
 */
@Component({
  selector: 'app-roma-script',
  templateUrl: './roma-script.component.html',
  styleUrls: ['./roma-script.component.sass'],
})
export class RomaScriptComponent {
  calculatedValue = '';
  onInputChange(event: Event): void {
    this.calculatedValue = convertToRoman(
      parseInt((event.target as HTMLInputElement).value)
    );
  }
}
