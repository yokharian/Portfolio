import {Title} from '@angular/platform-browser';
import {Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild("main") main: ElementRef | undefined;
  @ViewChild("footer") footer: ElementRef | undefined;
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`Portfolio`);
  }
}
