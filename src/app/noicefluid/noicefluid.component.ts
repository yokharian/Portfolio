import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-noicefluid',
  templateUrl: './noicefluid.component.html',
  styleUrls: ['./noicefluid.component.sass'],
})
export class NoicefluidComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Noice Fluid');
  }
}
