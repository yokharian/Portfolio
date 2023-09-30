import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-noicefluid',
  templateUrl: './noicefluid.component.html',
  styleUrls: ['./noicefluid.component.sass'],
})
export class NoicefluidComponent {
  services: any = {};

  constructor(private titleService: Title) {
    this.titleService.setTitle(`noicefluid`);
    this.services['validateCustomSignUp'] = this.validateCustomSignUp;
  }

  async validateCustomSignUp(formData: Record<string, string>) {
    if (!formData['gender']) {
      return {
        acknowledgement: `You must choose a gender`,
      };
    }
    return null;
  }
}
