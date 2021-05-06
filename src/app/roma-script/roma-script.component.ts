import { Component } from '@angular/core';
declare var convertToRoman: any;

/**
 * @title Slider with custom thumb label formatting.
 */
@Component({
  selector: 'app-roma-script',
  templateUrl: './roma-script.component.html',
  styleUrls: ['./roma-script.component.sass'],
})
export class RomaScriptComponent {
  input_value: number = 1;
  calculated_value: string = 'I';
  updateSetting(value_to_calculate: number | null) {
    this.input_value = value_to_calculate = value_to_calculate || 0;
    this.calculated_value = convertToRoman(value_to_calculate);
  }
}
