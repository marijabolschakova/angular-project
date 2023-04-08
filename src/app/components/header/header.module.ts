import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SwiperModule} from "swiper/angular";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SwiperModule, RouterModule, MaterialModule]
})

export class HeaderModule {}
