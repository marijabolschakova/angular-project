import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {
  Movies,
  Search,
  tmdbService
} from "../../core/services/tmdb.service";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Subscription,
  switchMap
} from "rxjs";
import {SwiperOptions} from "swiper";

interface SearchViewModel {
  id: number;
  link: string;
  title: string;
  image: {
    path: string;
    size: string;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subs: Subscription[] = []
  topRated?: Movies[] = [];
  popular?: Movies[] = [];
  upComing?: Movies[] = [];
  searchData: Array<SearchViewModel> = [];

  searchBanner = "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6LfVuZBiOOCtqch5Ukspjb9y0EB.jpg";

  upcomingMoviesTitle = 'Upcoming Movies';
  trendingMoviesTitle = 'Trending movies';
  popularMoviesTitle = 'Popular movies';

  public searchInput = new FormControl('');

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
    this.subs.push(this.tmdb.getTopRated().subscribe((res: Movies[]) => this.topRated = res));
    this.subs.push(this.tmdb.getPopular().subscribe((res: Movies[]) => this.popular  = res));
    this.subs.push(this.tmdb.getUpComing().subscribe((res: Movies[]) => this.upComing  = res));
    this.subs.push(this.getSearchResult$.subscribe((res: Search[]) => this.searchData = res.map(item => {
      if(item.media_type === 'movie') {
        return {
          id: item.id,
          link: 'moviedetails',
          title: item.title,
          image: {
            path: item.poster_path,
            size: 'w200',
          }
        }
      }
      if(item.media_type === 'person') {
        return {
          id: item.id,
          link: 'person',
          title: item.name,
          image: {
            path: item.profile_path,
            size: 'w370_and_h556_bestv2',
          }
        }
      }
      if (item.media_type === 'tv') {
        return {
          id: item.id,
          link: 'tvdetails',
          title: item.name,
          image: {
            path: item.backdrop_path,
            size: 'w370_and_h556_bestv2',
          }
        }
      }
      throw new Error('unknown media type =>' + item.media_type);
    })));
  }

  public isSearchHidden$ = this.searchInput.valueChanges.pipe(
    filter(Boolean),
    map(value => value.length > 2),
  );

  public getSearchResult$ = this.searchInput.valueChanges.pipe(
    filter(Boolean),
    filter((searchString) => searchString.length > 2),
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((searchString) => this.tmdb.searchMovies(searchString)),
  );

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
