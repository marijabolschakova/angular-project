import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MovieDetailsComponent} from "./movie-details.component";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {CastDetailsModule} from "../cast-details/cast-details.module";
import {ImageSourceModule} from "../../core/pipe/image-source.module";

@NgModule({
  declarations: [MovieDetailsComponent],
  exports: [MovieDetailsComponent],
    imports: [CommonModule, SwiperModule, RouterModule, CastDetailsModule, ImageSourceModule]
})

export class MovieDetailsModule {}
