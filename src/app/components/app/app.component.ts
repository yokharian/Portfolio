import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
  ];

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    parallax: true,
    speed: 600,
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  constructor() {}

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }
}
