import { Component } from '@angular/core';

/**
 * @title Slider with custom thumb label formatting.
 */
@Component({
  selector: 'app-roma-script',
  templateUrl: './roma-script.component.html',
  styleUrls: ['./roma-script.component.sass'],
})
export class RomaScriptComponent {
  sliderValue = 0;
  calculatedValue = '';
  updateSetting(event: any): void {
    this.calculatedValue = convertToRoman(this.sliderValue);
  }
}
