import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [CommonModule]
})

export class PageNotFoundModule {}
