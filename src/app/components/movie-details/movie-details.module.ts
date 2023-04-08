import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieDetailsComponent} from "./movie-details.component";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent],
  imports: [CommonModule, SwiperModule, RouterModule]
})

export class MovieDetailsModule {}
