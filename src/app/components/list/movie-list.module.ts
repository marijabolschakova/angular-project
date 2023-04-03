import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {ListComponent} from "./list.component";
import {MovieDetailsModule} from "../movie-details/movie-details.module";
import {HeaderModule} from "../header/header.module";

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, SwiperModule, RouterModule, MovieDetailsModule, HeaderModule]
})

export class MovieListModule {}
