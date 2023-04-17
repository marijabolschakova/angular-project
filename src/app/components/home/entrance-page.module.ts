import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {MovieListModule} from "../list/movie-list.module";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, SwiperModule, RouterModule, MovieListModule]
})

export class EntrancePageModule {}
