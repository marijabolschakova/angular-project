import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HomeComponent} from "./components/home/home.component";
import {ListComponent} from "./components/list/list.component";
import {SwiperModule} from "swiper/angular";
import {FormsModule} from "@angular/forms";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    MovieDetailsComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, MatProgressSpinnerModule, CommonModule, SwiperModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

