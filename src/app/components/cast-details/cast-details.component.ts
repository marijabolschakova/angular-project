import {Component, OnDestroy} from '@angular/core';
import {
  ActivatedRoute,
} from '@angular/router';
import {tmdbService} from "../../core/services/tmdb.service";
import {map, Observable, switchMap} from "rxjs";
import {SwiperOptions} from "swiper";

@Component({
  selector: 'cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnDestroy {
  public id: number | undefined;
  movie: any = {};
  casts: any = [];
  crew: any = [];
  headerBGUrl!: string;
  overview!: string;

  constructor(
    private ms: tmdbService,
    private route: ActivatedRoute,
  ) {}

  public movieId$: Observable<string> = this.route.params.pipe(
    map(value => value['id'])
  )

  public movieDetails = this.movieId$.pipe(
    switchMap(id => this.ms.getMovie(id))
  ).subscribe((res: any) => {
    this.movie = res;
  })

  public movieCredits = this.movieId$.pipe(
    switchMap(id => this.ms.getMovieCredits(id))
  ).subscribe((res: any) => {
    this.casts = res.cast;
    this.crew = res.crew;
  })

  ngOnDestroy(): void {
    this.movieDetails.unsubscribe();
    this.movieCredits.unsubscribe();
  }

  config: SwiperOptions = {
    spaceBetween: 10,
    navigation: false,
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2800
    },
    slidesPerView: 'auto',
    loop: true,
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
