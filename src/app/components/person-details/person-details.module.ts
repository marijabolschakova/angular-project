import { NgModule } from '@angular/core';
import {PersonDetailsComponent} from "./person-details.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {SwiperModule} from "swiper/angular";
import {ImageSourceModule} from "../../core/pipe/image-source.module";

@NgModule({
  declarations: [PersonDetailsComponent],
    imports: [CommonModule, RouterModule, MaterialModule, SwiperModule, ImageSourceModule]
})
export class PersonDetailsModule {}


