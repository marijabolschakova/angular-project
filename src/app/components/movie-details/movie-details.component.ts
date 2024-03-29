import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  Cast,
  Movies,
  tmdbService
} from "../../core/services/tmdb.service";
import {SwiperOptions} from "swiper";
import {map, Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnDestroy {
  public id: number | undefined;
  movie: Movies | undefined;
  casts: Cast[] = [];
  headerBGUrl: string | undefined;
  overview: string | undefined;

  test: string | undefined;

  constructor(
    private ms: tmdbService,
    private route: ActivatedRoute,
  ) {
  }

  public movieId$: Observable<string> = this.route.params.pipe(
    map(value => value['id'])
  )

  public sessionDetails = this.movieId$.pipe(
    switchMap(() => this.ms.getSessionId())
  ).subscribe((res) => {
    this.test = res.guest_session_id;
    this.ms.sessionId = this.test;
    console.log(this.test, 'bla-bla-bla')
  })

  public movieDetails = this.movieId$.pipe(
    switchMap(id => this.ms.getMovie(id))
  ).subscribe((res) => {
    this.movie = res;
    this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.movie.backdrop_path;
  })

  public movieCredits = this.movieId$.pipe(
    switchMap(id => this.ms.getMovieCredits(id))
  ).subscribe((res) => {
    this.casts = res.cast;
  })

  ngOnDestroy(): void {
    this.movieDetails.unsubscribe();
    this.movieCredits.unsubscribe();
    this.sessionDetails.unsubscribe();
  }

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3.5
      },
      1024: {
        slidesPerView: 4.7
      },
      1280: {
        slidesPerView: 5
      },
      1620: {
        slidesPerView: 7
      }
    }
  };
}
