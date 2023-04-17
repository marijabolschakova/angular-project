import { Component, OnInit } from '@angular/core';
import {Movies, tmdbService} from "../../core/services/tmdb.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subs: Subscription[] = []
  topRated?: Movies[] = [];
  popular?: Movies[] = [];
  upComing?: Movies [] = [];

  upcomingMoviesTitle = 'Upcoming Movies';
  trendingMoviesTitle = 'Trending movies';
  popularMoviesTitle = 'Popular movies';

  constructor(public tmdb: tmdbService, private ms: tmdbService ) {
  }

  ngOnInit(): void {
    this.subs.push(this.tmdb.getTopRated().subscribe((res: Movies[]) => this.topRated = res));
    this.subs.push(this.tmdb.getPopular().subscribe((res: Movies[]) => this.popular  =res));
    this.subs.push(this.tmdb.getUpComing().subscribe((res: Movies[]) => this.upComing  =res));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
