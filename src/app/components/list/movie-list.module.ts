import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {ListComponent} from "./list.component";
import {MovieDetailsModule} from "../movie-details/movie-details.module";
import {PersonDetailsModule} from "../person-details/person-details.module";
import {ImageSourceModule} from "../../core/pipe/image-source.module";

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, SwiperModule, RouterModule, MovieDetailsModule, PersonDetailsModule, ImageSourceModule]
})

export class MovieListModule {}
