import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SwiperModule} from "swiper/angular";
import {CastDetailsComponent} from "./cast-details.component";
import {ImageSourceModule} from "../../core/pipe/image-source.module";

@NgModule({
  declarations: [CastDetailsComponent],
    imports: [CommonModule, RouterModule, SwiperModule, ImageSourceModule]
})
export class CastDetailsModule {}


