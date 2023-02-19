import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'portfolio-sofia-escobedo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`Portfolio`);
  }
}
