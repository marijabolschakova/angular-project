import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SwiperModule} from "swiper/angular";
import {FormsModule} from "@angular/forms";
import {PageNotFoundModule} from "../components/page-not-found/page-not-found.module";
import {EntrancePageModule} from "../components/home/entrance-page.module";
import {LayoutComponent} from "./layout.component";
import {HeaderModule} from "../components/header/header.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CommonModule,
    SwiperModule,
    FormsModule,
    PageNotFoundModule,
    EntrancePageModule,
    HeaderModule,
  ],
  bootstrap: [LayoutComponent],
})
export class LayoutModule {}


