import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import { TvDetailsModule } from "../tv-details/tv-details.module";
import {HomeComponent} from "./home.component";
import {MovieListModule} from "../list/movie-list.module";
import {HeaderModule} from "../header/header.module";
import {
    FormsModule,
    ReactiveFormsModule
} from "@angular/forms";
import {ImageSourceModule} from "../../core/pipe/image-source.module";

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
    imports: [CommonModule, SwiperModule, RouterModule, MovieListModule, TvDetailsModule, HeaderModule, FormsModule, ReactiveFormsModule, ImageSourceModule]
})

export class EntrancePageModule {}
