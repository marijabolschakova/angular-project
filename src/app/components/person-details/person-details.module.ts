import { NgModule } from '@angular/core';
import {PersonDetailsComponent} from "./person-details.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [PersonDetailsComponent],
  imports: [CommonModule, RouterModule, MaterialModule, SwiperModule]
})
export class PersonDetailsModule {}


