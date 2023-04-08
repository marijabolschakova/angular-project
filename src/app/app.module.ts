import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AuthInterceptor} from "./core/http/auth.interceptor";
import {RouterModule} from "@angular/router";
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    RouterModule
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

