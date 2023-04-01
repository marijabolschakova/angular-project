import { Component, OnInit } from '@angular/core';
import {Movies, tmdbService} from "../../core/services/tmdb.service";
import {debounceTime, distinctUntilChanged, map, Subject, Subscription} from "rxjs";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subs: Subscription[] = []
  topRated!: Movies;
  popular!: Movies;
  upComing!: Movies;

  public searchStr = "";
  searchRes:any[]=[];

  searchBanner = "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg";

  upcomingMoviesTitle = 'Upcoming Movies';
  trendingMoviesTitle = 'Trending movies';
  popularMoviesTitle = 'Popular movies';

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2800
    },
    loop: true,
    breakpoints: {
      220: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 6
      },
      1820: {
        slidesPerView: 8
      }
    }
  };

  constructor(public tmdb: tmdbService) {
  }

  ngOnInit(): void {
    this.subs.push(this.tmdb.getTopRated().subscribe((res: Movies) => this.topRated  =res));
    this.subs.push(this.tmdb.getPopular().subscribe((res: Movies) => this.popular  =res));
    this.subs.push(this.tmdb.getUpComing().subscribe((res: Movies) => this.upComing  =res));
  }

  searchMovies(event: any) {
    if (event.length > 2) {
      this.searchStr = event;
      this.tmdb.searchMovies(event).pipe(
        debounceTime(200),
        distinctUntilChanged(),
      ).subscribe(res => {
        this.searchRes = res.results;
      });
    }
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
    this.searchMovies((res: { unsubscribe: any; }) => res.unsubscribe);
  }
}
