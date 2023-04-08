import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {LayoutComponent} from "./layout/layout.component";
import {PersonDetailsComponent} from "./components/person-details/person-details.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'moviedetails/:id',
        component: MovieDetailsComponent,
      },
      {
        path: 'person/:id',
        component: PersonDetailsComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
