import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieDetailsComponent} from "./movie-details.component";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {CastDetailsModule} from "../cast-details/cast-details.module";

@NgModule({
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent],
  imports: [CommonModule, SwiperModule, RouterModule, CastDetailsModule]
})

export class MovieDetailsModule {}
