import { Component, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay, Navigation, Pagination } from "swiper";
import {Movies} from "../../core/services/tmdb.service";

SwiperCore.use([ Autoplay, Navigation, Pagination]);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() movies?: Movies[];
  @Input() title!: string;

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
    loop: true,
    breakpoints: {
      220: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      },
      1820: {
        slidesPerView: 8
      }
    }
  };

  constructor() { }
}
