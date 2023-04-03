import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SwiperModule} from "swiper/angular";
import {FormsModule} from "@angular/forms";
import {PageNotFoundModule} from "./components/page-not-found/page-not-found.module";
import {AuthInterceptor} from "./core/http/auth.interceptor";
import {EntrancePageModule} from "./components/home/entrance-page.module";

@NgModule({
  declarations: [AppComponent],
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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

